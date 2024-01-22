import Mongoose from 'mongoose';


const MONGODB_URI = process.env.MONGODB_URI;


let cached = (global as any).mongoose || {conn: null, promise: null};

export const connectToDatabase = async () => {
    if(cached.conn) return cached.conn;


    if(!MONGODB_URI) throw new Error('MONGODB_URI env variable not set');

    cached.promise = cached.promise || Mongoose.connect(MONGODB_URI, {
        dbName: 'echelonscript',
        bufferCommands: false,
    })

    cached.conn = await cached.promise;

    return cached.conn;
}

//Explain the above code -  we are using mongoose to connect to our database. We are using the cached variable to store the connection and the promise. If the connection is already there, we return it. If not, we create a new connection and return it.
//In serverless functions, the code is executed in a serverless environment. This means that the code is executed in a container that is created when the function is called. This container is destroyed after the function is executed. This means that the connection to the database is closed after the function is executed. This is why we are using the cached variable to store the connection. This way, we can reuse the connection if it is already there. If not, we create a new connection and store it in the cached variable. This way, we can reuse the connection in subsequent calls to the function.


//Server Actions - Create a new server action file in the server folder. Name it create.ts. Add the following code to it:
//connect to database