import mongoose, { Schema, SchemaType } from "mongoose";
const subscriptionSchema=new Schema({
    subscriber:{
        typer:Schema.Types.ObjectId,//one who is subscribing
        ref:"User"
    },
    Channel:{
        typer:Schema.Types.ObjectId,//one to whom subscriber is subscribing
        ref:"User"

    }

},{timestamps:true})
export const subscription =mongoose.model("Subscription",subscriptionSchema)