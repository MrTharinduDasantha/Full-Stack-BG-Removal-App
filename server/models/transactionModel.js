import mongoose from "mongoose"

// Create a transaction schema
const transactionSchema = new mongoose.Schema({
    clerkId: {
        type: String,
        required: true
    },
    plan: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    credits: {
        type: Number,
        required: true
    },
    payment: {
        type: Boolean,
        default: false
    },
    date: {
        type: Number
    }
})

// Create a transaction model
const transactionModel = mongoose.models.transaction || mongoose.model("transaction", transactionSchema)

export default transactionModel