import { Request, Response } from 'express';
import {studentdetailsDao} from '../dao/studentdetailsDao';
import { CustomLogger } from '../config/Logger'
let studentdetails = new studentdetailsDao();

export class studentdetailsService {
    
    constructor() { }
    
    public GpUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into studentdetailsService.ts: GpUpdate')
     const  studentdetailsData = req.body;
     studentdetails.GpUpdate(studentdetailsData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from studentdetailsService.ts: GpUpdate')
         callback(response);
         });
    }
public GpDelete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into studentdetailsService.ts: GpDelete')
     const  studentdetailsId = req.params.id;
     studentdetails.GpDelete(studentdetailsId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from studentdetailsService.ts: GpDelete')
         callback(response);
         });
    }
public GpSearchForUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into studentdetailsService.ts: GpSearchForUpdate')
     const  studentdetailsData = req.body;
     studentdetails.GpSearchForUpdate(studentdetailsData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from studentdetailsService.ts: GpSearchForUpdate')
         callback(response);
         });
    }
public GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into studentdetailsService.ts: GpGetAllValues')
     
     studentdetails.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from studentdetailsService.ts: GpGetAllValues')
         callback(response);
         });
    }
public GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into studentdetailsService.ts: GpCreate')
     const  studentdetailsData = req.body;
     studentdetails.GpCreate(studentdetailsData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from studentdetailsService.ts: GpCreate')
         callback(response);
         });
    }
public GpSearch(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into studentdetailsService.ts: GpSearch')
     const  studentdetailsData = req.query;
     studentdetails.GpSearch(studentdetailsData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from studentdetailsService.ts: GpSearch')
         callback(response);
         });
    }
public GpGetNounById(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into studentdetailsService.ts: GpGetNounById')
     const  studentdetailsId = req.params.id;
     studentdetails.GpGetNounById(studentdetailsId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from studentdetailsService.ts: GpGetNounById')
         callback(response);
         });
    }


}