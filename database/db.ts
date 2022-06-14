import mongoose from 'mongoose';


const mongoConention = {
    isConnected: 0
}

export const connect = async () => {


    if (mongoConention.isConnected) {
        console.log('Mongoose is already connected');
        return;
    }

    if (mongoose.connections.length > 0) {
        mongoConention.isConnected = mongoose.connections[0].readyState;

        if (mongoConention.isConnected === 1) {
            console.log('Usanddo la conexion existente');
            return;
        }
        await mongoose.disconnect();
    }


    await mongoose.connect(process.env.MONGO_URL || '');
    mongoConention.isConnected = 1;
    console.log('Mongoose is connected');
}


export const disconnect = async () => {

    if(process.env.NODE_ENV === 'development') return ;


    if(mongoConention.isConnected === 0) return;

    await mongoose.disconnect();
    console.log('Mongoose is disconnected');
}





