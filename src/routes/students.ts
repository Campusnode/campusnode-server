import { Router, Request, Response } from "express";
import { BaseRoute } from "../base/routes/BaseRoute";
import { Student } from "../models";

export class students extends BaseRoute{

  constructor(router: Router) {
    super(router);

    let prefix: string = "/students"
    this.get(prefix, (req: Request, res: Response) => { this.list(req, res); });
  }

  public async list(req: Request, res: Response) {
    const students = await Student.findAll();
    return res.json(students);
  }

  public async display(req: Request, res: Response) {
    const student = await Student.findByPk(req.params.id);
    return res.json(student);
  }

}