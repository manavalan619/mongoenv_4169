import { Request, Response, NextFunction } from "express";
import { studentdetailsController } from '../controller/studentdetailsController';


export class Routes {
    private studentdetails: studentdetailsController = new studentdetailsController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/studentdetails').put(this.studentdetails.GpUpdate);
app.route('/studentdetails/:id').delete(this.studentdetails.GpDelete);
app.route('/studentdetails/get/update').put(this.studentdetails.GpSearchForUpdate);
app.route('/studentdetails').get(this.studentdetails.GpGetAllValues);
app.route('/studentdetails').post(this.studentdetails.GpCreate);
app.route('/studentdetails/get/search').get(this.studentdetails.GpSearch);
app.route('/studentdetails/:id').get(this.studentdetails.GpGetNounById);
     }

}