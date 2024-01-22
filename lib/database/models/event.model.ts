import { Schema, model, models, Document } from "mongoose";


// For add typescript to mongoose
export interface IEvent extends Document {
    _id: string,
    title: string,
    description?: string,
    location?: string,
    createdAt: Date,
    imageUrl: string,
    startDataTime: Date,
    endDataTime: Date,
    price?: string,
    isFree: boolean,
    url?: string,
    category: {_id: string, name: string},
    organizer: {_id: string, firstName: string, lastName: string,  email: string, photo: string},

}





const EventSchema = new Schema({
    title: {type: String, required: true},
    description: {type: String},
    location: {type: String},
    createdAt: {type: Date, default: Date.now},
    imageUrl: {type: String, required: true},
    startDataTime: {type: Date, default: Date.now},
    endDataTime: {type: Date, default: Date.now},
    price: {type: String},
    isFree: {type: Boolean, default: false},
    url:{type: String},
    category: {type:Schema.Types.ObjectId, ref: 'Category'},
    organizer: {type:Schema.Types.ObjectId, ref: 'User'},
    //remember to add more fields here
})


const Event = models.Event || model('Event', EventSchema);

export default Event;