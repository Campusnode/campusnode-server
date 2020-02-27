import { unlinkSync, stat } from "fs";
import { Sequelize } from "sequelize-typescript";
import { Dialect } from "sequelize/types";
import * as winston from "winston";
import Seeder from "../database/Seeder";

import * as models from '../models';

    /**
     * Setup database ORM
     * 
     * @class Server
     * @method database
     */
    export default class Database {
        private _db: Sequelize;

        get db(): Sequelize {
            return this.db;
        }
        
        constructor() {

            this._db = this.setupDatabase();

            if (process.env.NODE_ENV === "development") {
                // delete database logs in dev to avoid noise
                let log_path = __dirname + '/../logs/sequelize.log';
                stat(log_path, (err) => {
                    if (err == null) unlinkSync(log_path);
                });

                // run dev seeder
                if (process.env.RUN_DEV_SEED == 'true') {
                    runDevSeeder(this._db);
                }
            } else {
                runProdSeeder();
            }


        }

        private setupDatabase() {
            console.log(__dirname);
            return new Sequelize({
                database: process.env.DB_NAME,
                host: process.env.DB_HOST,
                port: Number(process.env.DB_PORT),
                dialect: process.env.DB_DIALECT as Dialect,
                username: process.env.DB_USER,
                password: process.env.DB_PASSWORD,
                models: Object.values(models),
                logging: (message) => this.setupLogging(message)
                
            });
        }

        private setupLogging(message: string) {
            const sqlLogger = winston.createLogger({
                level: 'info',
                format: winston.format.simple(),
                transports: [
                    new winston.transports.File({ filename: 'logs/sequelize.log'})
                ]
            });

            sqlLogger.info(message);
        
        }

    }

    async function runDevSeeder(db: Sequelize) {

        await db.sync({force: true});

        await Seeder.run();

        console.log("Database seeds generated!");


    }

    async function runProdSeeder() {
        // check if seeder is already run / live
    }