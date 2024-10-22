import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://fooddelivery:fooddelivery123@cluster0.273be.mongodb.net/food-del').then(()=>console.log("DB Connected"));
   
}


