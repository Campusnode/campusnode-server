import { CrudRoute } from "../base/routes/CrudRoute";
import { BaseRoute } from "../base/routes/BaseRoute";
import { NextFunction, Request, Response, Router } from "express";
import Student from "../models/Student";
import { Model } from "sequelize/types";
import { Sequelize } from "sequelize-typescript";


export default class students extends CrudRoute {

  constructor(router: Router, db: Sequelize) {
    super(
      router,
      db.model['Student'],
      'students'
    );
    this.router = router;
    
    this.title = "Students";
  }

}