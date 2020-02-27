import Config from "./config";
import Database from "./database";
import Cache from "./cache";
import Routes from "./routes";

let app = Config();
let db = new Database();
let cache = new Cache();
let routes = Routes(app);

export {
    app,
    db,
    cache,
    routes
}