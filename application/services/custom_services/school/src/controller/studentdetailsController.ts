import { Request, Response } from 'express';
import { studentdetailsService } from '../service/studentdetailsService';
import { CustomLogger } from '../config/Logger'
let studentdetails = new studentdetailsService();

export class studentdetailsController {
    
    constructor() { }
    
    public GpUpdate(req: Request, res: Response) {
studentdetails.GpUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into studentdetailsController.ts: GpUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from studentdetailsController.ts: GpUpdate');
    })}
public GpDelete(req: Request, res: Response) {
studentdetails.GpDelete(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into studentdetailsController.ts: GpDelete');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from studentdetailsController.ts: GpDelete');
    })}
public GpSearchForUpdate(req: Request, res: Response) {
studentdetails.GpSearchForUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into studentdetailsController.ts: GpSearchForUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from studentdetailsController.ts: GpSearchForUpdate');
    })}
public GpGetAllValues(req: Request, res: Response) {
studentdetails.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into studentdetailsController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from studentdetailsController.ts: GpGetAllValues');
    })}
public GpCreate(req: Request, res: Response) {
studentdetails.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into studentdetailsController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from studentdetailsController.ts: GpCreate');
    })}
public GpSearch(req: Request, res: Response) {
studentdetails.GpSearch(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into studentdetailsController.ts: GpSearch');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from studentdetailsController.ts: GpSearch');
    })}
public GpGetNounById(req: Request, res: Response) {
studentdetails.GpGetNounById(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into studentdetailsController.ts: GpGetNounById');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from studentdetailsController.ts: GpGetNounById');
    })}


}