import { Schema, model, models } from "mongoose";


//1. Remember to add more fields if needed to webhooks as well in app/api/webhook/clerk/route.ts - Very important dont forget

//2. Also remember to add these types in server actions as well in lib/actions/user.actions.ts - Very important dont forget

//types are in types/index.ts
const UserSchema = new Schema({
    clerkId: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    username: {type: String, required: true, unique: true},
    firstName: {type: String, required: true},
    lastName: {type: String}, //remember to make this required false
    photo: {type: String, required: true},
})



const User = models.User || model('User', UserSchema);

export default User;