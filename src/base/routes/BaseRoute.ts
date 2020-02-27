import { NextFunction, Request, Response, Router, RequestHandler } from "express";

/**
 * Constructor
 *
 * @class BaseRoute
 */
export class BaseRoute {

  protected title: string;
  public router: Router;


  /**
   * Constructor
   *
   * @class BaseRoute
   * @constructor
   */
  constructor(router: Router) {
    //initialize variables
    this.router = router;
  }

  public get(route: string, cb: RequestHandler) {
    this.router.get(route, cb);
  }

  public post(route: string, cb: any) {
    this.router.post(route, cb);
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

  public getRouter(): Router {
    return this.router;
  }

}