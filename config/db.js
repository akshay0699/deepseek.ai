import mongoose from "mongoose";

let cached = global.mongoose || {conn: null, Promise:null}

export default async function connectDB() {
    if(cached.conn) return cached.conn
    if(!cached.Promise){
        cached.Promise = mongoose.connect(process.env.MONGODB_URI).then((mongoose)=> mongoose);
    }

    try {
        cached.conn = await cached.Promise;
    } catch (error) {
        console.log("Error connecting to mongodb:", error)
    }
    return cached.conn
    
}