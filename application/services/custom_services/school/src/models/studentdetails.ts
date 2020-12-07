
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const studentdetailsSchema = new Schema({
   Name: String,
   Email: String
})

const studentdetailsModel = mongoose.model('studentdetails', studentdetailsSchema, 'studentdetails');
export default studentdetailsModel;
