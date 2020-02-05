import { NextFunction, Request, Response, Router } from "express";

/**
 * Constructor
 *
 * @class BaseRoute
 */
export class BaseRoute {

  protected title: string;
  protected router: Router;


  /**
   * Constructor
   *
   * @class BaseRoute
   * @constructor
   */
  constructor(router: Router, title?: string) {
    //initialize variables
    this.router = router;
  }

  public get(route: string, cb: Function) {
    this.router.get(route, (req: Request, res: Response, next: NextFunction) => {
      return cb(req, res, next);
    });
  }

  public post(route: string, cb: Function) {
    this.router.post(route, (req: Request, res: Response, next: NextFunction) => {
      return cb(req, res, next);
    });
  }

  public patch(route: string, cb: Function) {
    this.router.patch(route, (req: Request, res: Response, next: NextFunction) => {
      return cb(req, res, next);
    });
  }

  public put(route: string, cb: Function) {
    this.router.put(route, (req: Request, res: Response, next: NextFunction) => {
      return cb(req, res, next);
    });
  }

  public delete(route:string, cb: Function) {
    this.router.delete(route, (req: Request, res: Response, next: NextFunction) => {
      return cb(req, res, next);
    });
  }

}