const { Router } = require('express');
const {
    createDriverHandler,
    getDriversByNameHandler,
    getDriversHandler,
    getDriverByIdHandler
} = require('../handlers/driversHandlers');

const driversRouter = Router();

driversRouter.get("/", getDriversHandler);
driversRouter.get("/name", getDriversByNameHandler);
driversRouter.get("/:id", getDriverByIdHandler);
driversRouter.post("/drivers", createDriverHandler);

module.exports = driversRouter;