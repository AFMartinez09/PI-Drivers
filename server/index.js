const server = require("./src/server");
const { conn } = require('./src/DB_connection.js');
const PORT = 3001;

conn.sync({ alter: true }).then(() => {
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
})
}).catch(error => console.error(error))
