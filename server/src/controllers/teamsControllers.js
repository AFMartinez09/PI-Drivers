const axios = require('axios');
const { Teams } = require('../db');
const URL_BASE = "http://localhost:5000/drivers";

const getAllTeams = async () => {

    try {

        let DBTeams = await Teams.findAll();

        if (!DBTeams.length) {
            const { data } = await axios.get(`${URL_BASE}`);
            if (!data) throw new Error('No drivers teams were found');

            const teamsArray = [];

            data.forEach((driver) => {
                const { teams } = driver;
                if (teams) {
                    const separateRemoveSpaces = teams.split(',').map(team => team.trim());
                    teamsArray.push(...separateRemoveSpaces);
                }

            });
            const removeDuplicatesSet = new Set(teamsArray);
            const orderArray = Array.from(removeDuplicatesSet).sort();

            const driversTeams = orderArray.map((team) => {
                return { name: team }
            })

            const teams = await Teams.bulkCreate(driversTeams)

            return teams;
        }
        return DBTeams;

    } catch (error) {
        throw new Error(error.message);
    }

};

module.exports = {
    getAllTeams
}
