import { GET_DRIVERS, GET_DRIVERS_BY_NAME, GET_DRIVERS_BY_ID, GET_TEAMS, FILTER, ORDER } from "./actions/action_types";

let initialState = {
    drivers: [],
    driversCopy: [],
    teams: [],
    driversId: []
    
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {

      case GET_DRIVERS:
        return {
          ...state,
          drivers: action.payload,
          driversCopy: action.payload
        };

      case GET_DRIVERS_BY_NAME:
        return {
          ...state,
          drivers: action.payload
        };

      case GET_TEAMS: 
          return { 
          ...state, 
          teams: action.payload.teamsList
        };
      case GET_DRIVERS_BY_ID:
            return {
                ...state,
                driversByID: action.payload
            };
      case FILTER:
        let filteredDrivers = [...state.drivers];

      switch (action.payload) {
        case 'Database ID':
          filteredDrivers = state.drivers.filter(driver => isNaN(driver.id)); 
        break;
        case 'API ID':
          filteredDrivers = state.drivers.filter(driver => !isNaN(driver.id));
        break;
        case 'Default':
          filteredDrivers = [...state.driversCopy];
        break;
        default:
          filteredDrivers = state.drivers.filter(driver => driver?.teams?.includes(action.payload));
}
      return {
        ...state,
        drivers: filteredDrivers
      };


      case ORDER:
        let driversOrder = [...state.drivers];
            
        switch (action.payload) {
          case "Default":
            driversOrder = [...state.driversCopy];
          break;
          case "A Alphabetical":
            driversOrder.sort((a, b) => (a.forename < b.forename ? -1 : 1));
          break;
          case "D Alphabetical":
            driversOrder.sort((a, b) => (a.forename > b.forename ? -1 : 1));
          break;
          case "A Birthdate":
            driversOrder.sort((a, b) => (a.dob < b.dob ? -1 : 1));
          break;
          case "D Birthdate":
            driversOrder.sort((a, b) => (a.dob > b.dob ? -1 : 1));
          break;
                default:
          break;
        }
          
          return {
            ...state,
            drivers: driversOrder
          };
      default: 
        return {...state}      
    
    }
}

export default rootReducer;