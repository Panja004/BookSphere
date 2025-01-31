import validator from "validator"
import userModel from "../models/userModel.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"


// Function for creating a token
const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET)
}

// Controller function to handle user login
const handleUserLogin = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await userModel.findOne({ email })
        if (!user) {
            return res.json({ success: false, message: "User doesn't exist" })
        }
        const isMatch = await bcrypt.compare(password, user.password)
        if (isMatch) {
            const token = createToken(user._id)
            res.json({ success: true, token })
        } else {
            res.json({ success: false, message: "Invalid credentials" })
        }
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}


// Controller function to handle user register
const handleUserRegister = async (req, res) => {
    try {
        const { name, email, password } = req.body
        // Check if user already exist or not
        const exists = await userModel.findOne({ email })
        if (exists) {
            return res.json({ success: false, message: "User already exist" })
        }
        //Checking email format and password strength
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Please enter valid email address" })
        }
        if (password.length < 8) {
            return res.json({ success: false, message: "Please enter strong password" })
        }
        // Hashing user password with bcrypt package
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        // Creating a new user using hashed password
        const newUser = new userModel({
            name,
            email,
            password: hashedPassword
        })

        const user = await newUser.save()
        const token = createToken(user._id)
        res.json({ success: true, token })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
    
}


// Controller function to handle admin login
const handleAdminLogin = async (req, res) => {
    try {
    const {email,password} = req.body
    if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASS){
        const token = jwt.sign(email + password, process.env.JWT_SECRET)
        res.json({success:true, token})
    }else{
        res.json({success:false, message:"Invalid credentials"})
    }
} catch (error) {
       console.log(error)
       res.json({ success: false, message: error.message })
   }
}


export { handleUserLogin, handleUserRegister, handleAdminLogin }

