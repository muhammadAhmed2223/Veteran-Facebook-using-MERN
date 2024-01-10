import mongoose from "mongoose";

const VetSchema = mongoose.Schema({
    email: String,
    password: String,
    name: String,
    prevOccupation: String,
    age: Number,
    hobbies: String,
})

const VetStr = mongoose.model('VetStr', VetSchema);

export default VetStr;