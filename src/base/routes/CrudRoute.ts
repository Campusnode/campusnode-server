import { NextFunction, Request, Response, Router } from "express";
import { BaseRoute } from "./BaseRoute";
import { Model } from "sequelize-typescript";

/**
 * Constructor
 *
 * @class BaseRoute
 */
export abstract class CrudRoute extends BaseRoute {
    private model: Model;
    private prefix: string;

    constructor(router: Router, model: Model, prefix: string) {
        super(router);
        this.model = model;
        this.prefix = prefix + '/';

        this.get(prefix, this.list);
        this.post(prefix, this.store);
    }

    public list(req: Request, res: Response): Response {
        return res.json(this.model.toJSON())
    }

    public create(req: Request, res: Response): Object {
        return {};
    }

    public store(req: Request, res: Response): void {
        return res.redirect('/show');
    }

    public display(req: Request, res: Response): Object {
        return {};
    }

    public edit(req: Request, res: Response): Object {
        return {};
    }

    public update(req: Request, res: Response): void {
        return res.redirect('/show');
    }

    public remove(req: Request, res: Response): Object {
        return {};
    }

}