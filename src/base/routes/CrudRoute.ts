import { NextFunction, Request, Response, Router } from "express";
import { BaseRoute } from "./BaseRoute";
import { Model } from "sequelize-typescript";
import CampusModel from "../models/CampusModel";

/**
 * Constructor
 *
 * @class BaseRoute
 */
export class CrudRoute extends BaseRoute {
    private model: any;

    constructor(router: Router, model: any, prefix: string) {
        super(router);
        this.model = model;
        prefix = '/' + prefix + '/';

        this.get(prefix, (req, res) => { this.list(req, res) } );
        this.post(prefix, (req, res) =>{ this.store(req, res) } );
    }

    public async list(this: CrudRoute, req: Request, res: Response): Promise<Object> {
        let resource = await this.model.findAll();
        resource = await this.beforeIndexResponse(resource);
        return res.json(resource);
    }

    public async create(req: Request, res: Response): Promise<Response> {
        return res.json();
    }

    public async store(req: Request, res: Response): Promise<Response> {
        return res.json();
    }

    public async display(req: Request, res: Response): Promise<Response> {
        return res.json();
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

    public async beforeIndexResponse(resource) {
        return resource;
    }

}