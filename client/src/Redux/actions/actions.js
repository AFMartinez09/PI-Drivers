import axios from "axios";
import { GET_DRIVERS, GET_DRIVERS_BY_ID,GET_DRIVERS_BY_NAME, GET_TEAMS, CREATE_DRIVER, FILTER, ORDER } from './action_types';


export function getDrivers() {
    const URL_BASE = 'http://localhost:3001';
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`${URL_BASE}/drivers`);
            return dispatch({
                type: GET_DRIVERS,
                payload: data,
            });
            
        } catch (error) {
            throw new Error(error.message)
        }
    }
}

export function getDriverById() {
    const URL_BASE = 'http://localhost:3001';
        return async (dispatch) => {
        try {
            const { data } = await axios.get(`${URL_BASE}/drivers/${id}`);
            return dispatch({
            type: GET_DRIVERS_BY_ID,
            payload: data,
            });
            
        } catch (error) {
            throw new Error(error.message)
        }
    }
}    

export function getDriversByName(forename) {
    const URL_BASE = 'http://localhost:3001';
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`${URL_BASE}/name?name=${forename}`);
            return dispatch({
                type: GET_DRIVERS_BY_NAME,
                payload: data,
            });
            
        } catch (error) {
            throw new Error(error.message)
        }
    }
}

export function getTeams() {
    const URL_BASE = 'http://localhost:3001/teams';
    return async (dispatch) => {
        try {
            const { data } = await axios.get(URL_BASE);
            return dispatch({
                type: GET_TEAMS,
                payload: data,
            });
            
        } catch (error) {
            throw new Error(error.message)
        }
    }
}

export function postDriver (driver) {
    const URL_BASE = 'http://localhost:3001/teams';
    return async (dispatch) => {
        try {
            const { data } = await axios.get(URL_BASE, driver);  // send driver's information to the server, using url and driver (object)
            return dispatch({
                type: CREATE_DRIVER,
                payload: data,
            });
            
        } catch (error) {
            throw new Error(error.message)
        }

}
}

export const filterDrivers = (filtered) => {

    return { 
        type: FILTER, 
        payload: filtered 
    }
}

export const orderDrivers = (order) => {

    return { 
        type: ORDER, 
        payload: order 
    }
}





