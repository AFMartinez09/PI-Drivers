const { Router } = require('express');
const { getAllTeamsHandler } = require('../handlers/teamsHandlers');

const teamsRouter = Router();

teamsRouter.get('/teams', getAllTeamsHandler);

module.exports = teamsRouter;