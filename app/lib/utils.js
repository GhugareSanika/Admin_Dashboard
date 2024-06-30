// import mongoose from "mongoose";
// let isConnected;

// export const connectionToDB = async () =>{
//     try{
//         if(isConnected)  return;
//         const db = await mongoose.connect(process.env.MONGO);
//         connection.isConnected = db.connections[0].readyState
//     }catch(error){
//         console.log(error);
//         throw new Error(error)
//     } 
// }

//import mongoose from 'mongoose';

// let isConnected = false; // Use a variable to track connection state

// export const connectToDB = async () => {
//     try {
//         if (isConnected) {
//             console.log("Already connected to the database");
//             return;
//         }

//         await mongoose.connect(process.env.MONGO, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         });

//         isConnected = mongoose.connection.readyState === 1;
//         console.log("Connected to the database");
//     } catch (error) {
//         console.error("Database connection error:", error);
//         throw new Error("Failed to connect to the database");
//     }
// };


import mongoose from "mongoose";
let isConnected;

export const connectToDB = async () =>{
    try {
        if (isConnected) return;
        const db = await mongoose.connect(process.env.MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        isConnected = db.connections[0].readyState;
        console.log('Connected to database');
    } catch (error) {
        console.error('Error connecting to database:', error);
        throw new Error(error);
    } 
}
