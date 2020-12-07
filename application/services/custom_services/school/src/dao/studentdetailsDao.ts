import * as mongoose from 'mongoose';
import studentdetailsModel from '../models/studentdetails';
import { CustomLogger } from '../config/Logger'


export class studentdetailsDao {
    private studentdetails = studentdetailsModel;
    constructor() { }
public GpUpdate(studentdetailsData, callback){
new CustomLogger().showLogger('info', 'Enter into studentdetailsDao.ts: GpUpdate')

this.studentdetails.findOneAndUpdate({ _id: studentdetailsData._id }, studentdetailsData, { new: true }).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from studentdetailsDao.ts: GpUpdate');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpDelete(studentdetailsId, callback){
new CustomLogger().showLogger('info', 'Enter into studentdetailsDao.ts: GpDelete')

this.studentdetails.findByIdAndRemove(studentdetailsId).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from studentdetailsDao.ts: GpDelete');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpSearchForUpdate(studentdetailsData, callback){
new CustomLogger().showLogger('info', 'Enter into studentdetailsDao.ts: GpSearchForUpdate')

this.studentdetails.findOneAndUpdate({ _id: studentdetailsData._id }, studentdetailsData, { new: true }).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from studentdetailsDao.ts: GpSearchForUpdate');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpGetAllValues(callback){
new CustomLogger().showLogger('info', 'Enter into studentdetailsDao.ts: GpGetAllValues')

this.studentdetails.find().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from studentdetailsDao.ts: GpGetAllValues');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpCreate(studentdetailsData, callback){
new CustomLogger().showLogger('info', 'Enter into studentdetailsDao.ts: GpCreate')
let temp = new studentdetailsModel(studentdetailsData);
;
temp.save().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from studentdetailsDao.ts: GpCreate');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpSearch(studentdetailsData, callback){
new CustomLogger().showLogger('info', 'Enter into studentdetailsDao.ts: GpSearch')
let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;Object.entries(studentdetailsData).forEach(
                        ([key,value]) => {
                            if(value !== ''){
                                andkey = key;
                                and_obj[andkey] = value;
                            }
                            else{
                                orkey = key;
                                or_obj[orkey] = { $ne: '' }
                            }
                        }
                    );;
;
this.studentdetails.find({$and: [
                        {
                            $or: [
                               or_obj
                            ]
                        },
                        and_obj
                    ]}).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from studentdetailsDao.ts: GpSearch');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpGetNounById(studentdetailsId, callback){
new CustomLogger().showLogger('info', 'Enter into studentdetailsDao.ts: GpGetNounById')

this.studentdetails.findById(studentdetailsId).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from studentdetailsDao.ts: GpGetNounById');
callback(result);
}).catch((error)=>{
callback(error);
});}


}