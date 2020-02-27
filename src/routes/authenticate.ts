import { Router, Request, Response } from "express";
import { BaseRoute } from "../base/routes/BaseRoute";
import * as jwt from 'jsonwebtoken';
import { cache } from "../app";
import { User } from "../models";


export class authenticate extends BaseRoute {

    constructor(router: Router) {
        super(router);

        this.post('/authenticate', async (req: Request, res: Response) => {
            await this.authenticate(req, res);
        });

        this.post('/invalidate', async (req: Request, res: Response) => {
            await this.invalidate(req, res);
        });
    }

    public async authenticate(req: Request, res: Response): Promise<Response> {
        const user = await User.checkCredentials(req.body.email, req.body.password);

        if (user == null) {
            return res.status(402).json({ 'error': 'User could not be authenticated' })
        }
        // TODO: Implement blacklist

        if (user) {
            jwt.sign(user.toJSON(), process.env.JWT_SECRET, {
                expiresIn: "15m",
                algorithm: process.env.JWT_ALGO as jwt.Algorithm
            }, (err, token) => {
                if (err) { throw err }
                return res.json({ 'token': token });
            });
        }
    }

    public async invalidate(req: Request, res: Response) {

        jwt.verify(req.body.token, process.env.JWT_SECRET, (err, decoded) => {
            if (err) { throw err; }
            cache.setBlacklist(req.body.token);
            return res.json(decoded);
        });

    }

}