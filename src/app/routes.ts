import { Router, Application } from "express";
import { authenticate, students, users } from "../routes";

    /**
     * Create router
     *
     * @class Server
     * @method routes
     */
    export default function Routes(app: Application) {

        let router = Router();
        
        // middleware


        // routes
        router = new authenticate(router).getRouter();
        router = new students(router).getRouter();
        router = new users(router).getRouter();

        
        // register all routes on /
        app.use('/', router);
        console.log("Routes configured!... 30%");

    }