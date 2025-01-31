import express from "express"
import adminAuth from "../middleware/adminAuth.js"
import { allOrders, placeOrder, placeOrderStripe, UpdateStatus, userOrders, verifyStripe } from "../controllers/orderController.js"
import authUser from "../middleware/auth.js"

const orderRouter = express.Router()

// For Admin
orderRouter.post('/list', adminAuth, allOrders)
orderRouter.post('/status', adminAuth, UpdateStatus)

// For Payment 
orderRouter.post('/place', authUser, placeOrder)
orderRouter.post('/stripe', authUser, placeOrderStripe)

// Verify Payment 
orderRouter.post('/verifystripe', authUser, verifyStripe)

// For User
orderRouter.post('/userorders', authUser, userOrders)

export default orderRouter