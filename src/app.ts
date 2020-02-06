import * as express from "express";
import * as bodyParser from "body-parser";
import * as cookieParser from "cookie-parser";
import * as logger from "morgan";
import * as path from "path";
import * as errorHandler from "errorhandler";
import * as methodOverride from "method-override";

import { Sequelize, getModels } from "sequelize-typescript";
import { Dialect } from "sequelize";
import students from "./routes/students";

// import { Sequelize, Dialect } from "";

/**
 * This file adapted from https://brianflove.com/2016/11/08/typescript-2-express-node/
 * This is the entry point for this application.
 * @class Server
 */
export class Server {
    public app: express.Application;
    public db: Sequelize;


    /**
     * Bootstrap the application.
     *
     * @class Server
     * @method bootstrap
     * @static
     * @return {Server} Returns the newly created injector for this app.
     */
    public static bootstrap(): Server {
        return new Server();
    }

    /**
     * Constructor.
     *
     * @class Server
     * @constructor
     */
    constructor() {
        // insert things from .env into env
        require('dotenv').config();

        //create expressjs application
        this.app = express();

        //configure application
        this.config();

        // start database
        this.database();

        //add routes
        this.routes();

    }

    /**
     * Configure application
     *
     * @class Server
     * @method config
     */
    public config() {
        // static paths
        this.app.use(express.static(path.join(__dirname, "public")));

        // logging
        this.app.use(logger("dev"));

        // json form parser middleware
        this.app.use(bodyParser.json());

        // query string parser middleward
        this.app.use(bodyParser.urlencoded({ extended: true }));

        // cookie parser middleware
        this.app.use(cookieParser(process.env.SECRET));

        // method override
        this.app.use(methodOverride());

        //catch 404 and forward to error handler
        this.app.use(function(err: any, req: express.Request, res: express.Response, next: express.NextFunction) {
            err.status = 404;
            next(err);
        });

        //error handling
        this.app.use(errorHandler());

    }

    /**
     * Setup database ORM
     * 
     * @class Server
     * @method database
     */
    public database() {

        this.db = new Sequelize({
            database: process.env.DB_NAME,
            host: process.env.DB_HOST,
            port: Number(process.env.DB_PORT),
            dialect: process.env.DB_DIALECT as Dialect,
            username: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            models: [__dirname + '/models'],
            
        });

        //temporary 
        this.db.models['Student'].sync({force: true});
    }

    /**
     * Create router
     *
     * @class Server
     * @method routes
     */
    public routes() {

        let router = express.Router();

        new students(router, this.db);

        // middleware

        // routes
        
        //empty for now

        this.app.use(router);
    }
}