const { Drivers, Teams } = require ('../DB_connection');
const axios = require('axios');
const URL_BASE = "http://localhost:5000/drivers";


const createDriver = async(
    forename, 
    surname, 
    description, 
    image, 
    nationality, 
    dob, 
    teams, 
    created
    ) =>{     //este es el post
    const newDriver = await Drivers.create({where: { forename, surname }, // Criterios de búsqueda
    defaults: {
      description,
      image,
      nationality,
      dob,
      teams,
      created,
    }
});
    return newDriver;
};

//find all drivers in databse
const getDriversDB = async() => {
    const driversDB = await Drivers.findAll();
    return driversDB;
}
//find all drivers in API
const getDriversApi = async() =>{
    const { data } = 
    ( await axios.get(`${URL_BASE}`)).data;
    return data;
}

const getDriversByName = async(name) =>{
    const driversDB = await getDriversDB();
    const driversApi = await getDriversApi();
    const allDrivers = [...driversDB, ...driversApi];

    // search the word in lower case and the user don't have to type all driver's name
    if(name){
        const driversFound = allDrivers.filter((driver) => {
            (driver.forename.toLowerCase().includes(name.toLowerCase())  ||
            driver.surname.toLowerCase().includes(name.toLowerCase()) 
            );
            return driversFound.slice(0, 15);
        })
    }

    return allDrivers;
};

const getDrivers = async() =>{
    const driversDB = await Drivers.findAll();
    return driversDB;
};     // devuelve todos los drivers

const getDriverById = async(id)=>{
    
    if(isNaN(id)){
        const driverFound = await Drivers.findByPk(id);
        return driverFound;
    }
    const apiRequest = 
    ( await axios.get(`http://localhost:5000/drivers/${id}`)).data;
    
    const driverFound = apiRequest.find((driver) => driver.id === +id);
    return driverFound;
};

module.exports = {
    createDriver,
    getDriversByName,
    getDrivers,
    getDriverById
};