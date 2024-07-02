import mongoose from "mongoose";
const connectDatabase = async () => {
    try {
        const base = "mongodb+srv://phanith_db:nith280404@cluster0.wth5s0v.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
        await mongoose.connect(base);
        console.log('Database connected successfully');
    }catch (error){
        console.error('Database connection failed')
        process.exit(1);
    }
};

export default connectDatabase;
