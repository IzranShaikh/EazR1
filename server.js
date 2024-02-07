const http = require('http');
const app = require('./app');
require('dotenv').config();

//creating express-based server
const server = http.createServer(app);

const port = process.env.PORT || 6568;
server.listen(port, () => {
    console.log("Server running at " + port);
});