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



import mongoose from "mongoose";
let isConnected = false; // Ensure isConnected is initialized

export const connectToDB = async () => {
    try {
        if (isConnected) {
            console.log("Already connected to database");
            return;
        }

        const db = await mongoose.connect(process.env.MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        isConnected = db.connections[0].readyState === 1; // Check if the connection is established
        if (isConnected) {
            console.log('Connected to database');
        } else {
            console.error('Database connection failed');
            throw new Error('Database connection failed');
        }
    } catch (error) {
        console.error('Error connecting to database:', error.message);
        throw new Error('Database connection error');
    }
};
