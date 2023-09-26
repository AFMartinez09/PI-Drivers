const {
    createDriver,
    getDriversByName,
    getDrivers,
    getDriverById
} = require('../controllers/driversControllers');

const createDriverHandler = async (req, res) => {
  
    try {
    const { 
        forename, 
        surname, 
        description, 
        image, 
        nationality, 
        dob, 
        teams, 
        created
    } =req.body;
    const response = await createDriver(    forename, 
        surname, 
        description, 
        image, 
        nationality, 
        dob, 
        teams, 
        created
        );
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
const getDriversByNameHandler = async (req, res) => {
    try {
        const { name } =req.query;
        if (name) {
            const driverByName = await getDriversByName(name);
            res.status(200).json(driverByName);
        } else {
            const allDrivers = await getDrivers();
            res.status(200).json(allDrivers);
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getDriversHandler = async (req, res) => {
    try {
        const response = await getDrivers();
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getDriverByIdHandler = async (req, res) => {
    try {
        const { id } = req.params;
        const response = await getDriverById(id);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    createDriverHandler,
    getDriversByNameHandler,
    getDriversHandler,
    getDriverByIdHandler
}
