import * as express from "express";
import * as bodyParser from "body-parser";
import * as cookieParser from "cookie-parser";
import * as logger from "morgan";
import * as path from "path";
import * as errorHandler from "errorhandler";
import * as methodOverride from "method-override";

/**
 * Configure application
 */
export default function Config() {

    // insert things from .env into env
    require('dotenv').config();

    let app = express();
    
    // static paths
    app.use(express.static(path.join(__dirname, "public")));

    // logging
    app.use(logger("dev"));

    // json form parser middleware
    app.use(bodyParser.json());

    // query string parser middleward
    app.use(bodyParser.urlencoded({ extended: true }));

    // cookie parser middleware
    app.use(cookieParser(process.env.SECRET));

    // method override
    app.use(methodOverride());

    //catch 404 and forward to error handler
    app.use(function(err: any, req: express.Request, res: express.Response, next: express.NextFunction) {
        err.status = 404;
        next(err);
    });

    //error handling
    app.use(errorHandler());

    return app;

}