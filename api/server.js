const express = require("express");
const projectsRouter = require('../routes/projects/projectsRouter.js');
const actionsRouter = require('../routes/actions/actionsRouter.js');
const configureMiddleware = require('../config/middleware.js');

const server = express();

// middleware 
configureMiddleware(server);

//projects middlware
server.use('/api/projects', projectsRouter);

//actions middlware
server.use('/api/actions', actionsRouter);


module.exports = server;