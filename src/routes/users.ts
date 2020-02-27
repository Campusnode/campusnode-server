import { CrudRoute } from "../base/routes/CrudRoute";
import { Router } from "express";
import { BaseRoute } from "../base/routes/BaseRoute";
import * as jwt from "jsonwebtoken";

export class users extends BaseRoute {

  constructor(router: Router) {
    super( router );
  }


}