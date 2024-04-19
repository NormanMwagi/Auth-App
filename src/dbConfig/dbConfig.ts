import mongoose from "mongoose";

export default async function connect(){
    try {
        mongoose.connect(process.env.MONGO_URL!);
        const connection = mongoose.Connection;
        connection.on('connected', ()=> {
            console.log('Mongo connected successfully');
        })
        connection.on('error', (err) => {
            console.log('An error occured while connecting to mongo' + err);
            process.exit();
        })
    } catch (error) {
        console.log(`An error occured ${error}`);
    }
}