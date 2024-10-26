import mongoose from "mongoose"

const connectDB = async () => {
    mongoose.connection.on("connected", () => {
        console.log("Database connected successfully")
    })

    await mongoose.connect(`${process.env.MONGODB_URI}/bg_removal_website_db`)
}

export default connectDB