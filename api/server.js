const express = require("express");
const projectsRouter = require('../routes/projects/projectsRouter.js');
// const postsRouter = require('../routes/posts/postsRouters.js');
const configureMiddleware = require('../config/middleware.js');

const server = express();

// middleware 
configureMiddleware(server);

//projects middlware
server.use('/api/projects', projectsRouter);

//posts middlware
//server.use('/api/posts', postsRouter);


module.exports = server;