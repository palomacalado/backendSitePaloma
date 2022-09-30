import express, { Router } from "express";
import cors from "cors";
import routes from './routes'
import  "./database";
var bodyParser = require('body-parser');

class App{
    
    constructor(){
        this.server = express();
        this.server.use(bodyParser.urlencoded({limit: 1000000, extended: true}));
        this.server.use(bodyParser.json({limit: 1000000}));
        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.server.use(express.json());
        this.server.use(cors());
    }

    routes(){
     
        this.server.use(routes);

    }


}
export default new App().server;