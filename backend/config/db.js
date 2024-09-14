import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://kundank11:ZdUujcgXwbry0rcU@cluster0.byfai.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/food-del').then(()=>console.log("DB Connected"))
    
    .catch((err)=>{console.log(err?.message)});
   
}


// add your mongoDB connection string above.
// Do not use '@' symbol in your databse user's password else it will show an error.