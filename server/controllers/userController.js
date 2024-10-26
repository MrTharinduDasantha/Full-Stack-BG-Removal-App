import { Webhook } from "svix"
import userModel from "../models/userModel.js"

// Api controller function to manage clerk user with database
// http://localhost:3000/api/user/webhooks

const clerkWebhooks = async (req, res) => {
    try {
        // Create a svix instance with clerk webhook secret key
        const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET)

        // Verify the webhook signature and payload
        await whook.verify(JSON.stringify(req.body), {
            "svix-id": req.headers["svix-id"],
            "svix-timestamp": req.headers["svix-timestamp"],
            "svix-signature": req.headers["svix-signature"]
        })

        const { data, type } = req.body

        // Handle different types of webhook events
        switch (type) {
            case "user.created": {
                const userData = {
                    clerkId: data.id,
                    email: data.email_addresses[0].email_address,
                    firstName: data.first_name,
                    lastName: data.last_name,
                    photo: data.image_url
                }

                await userModel.create(userData)
                res.json({})

                break
            }
            case "user.updated": {
                const userData = {
                    email: data.email_addresses[0].email_address,
                    firstName: data.first_name,
                    lastName: data.last_name,
                    photo: data.image_url
                }

                await userModel.findOneAndUpdate({ clerkId: data.id }, userData)
                res.json({})

                break
            }
            case "user.deleted": {
                await userModel.findOneAndDelete({ clerkId: data.id })
                res.json({})

                break
            }
            default:
                break
        }
    } catch (error) {
        console.log(error.message)
        res.json({ success: false, error: error.message })
    }
}

// Api controller function to get user available credits data
const userCredits = async (req, res) => {
    try {
        const { clerkId } = req.body
        const userData = await userModel.findOne({ clerkId })
        res.json({ success: true, credits: userData.creditBalance })
    } catch (error) {
        console.log(error.message)
        res.json({ success: false, error: error.message })
    }
}

export { clerkWebhooks, userCredits }