import userModel from "../models/userModel.js"


// Controller function for adding a product to the user's cart
const addToCart = async (req, res) => {
    try {
        const { userId, itemId } = req.body

        const userData = await userModel.findById(userId)
        const cartData = await userData.cartData

        if (cartData[itemId]) {
            cartData[itemId] += 1
        } else {
            cartData[itemId] = 1
        }

        await userModel.findByIdAndUpdate(userId, { cartData })
        res.json({ success: true, message: "Added to Cart" })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}


// Controller function for updating the user's cart
const updateCart = async (req, res) => {
    try {
        const { userId, itemId, quantity } = req.body

        const userData = await userModel.findById(userId)
        const cartData = await userData.cartData

        cartData[itemId] = quantity

        await userModel.findByIdAndUpdate(userId, { cartData })
        res.json({ success: true, message: "Your Cart Updated" })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}


// Controller function for retrieving the user's cart details
const getUserCart = async (req, res) => {
    try {
        const { userId } = req.body

        const userData = await userModel.findById(userId)
        const cartData = await userData.cartData

        res.json({ success: true, cartData })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}


export { addToCart, updateCart, getUserCart }
