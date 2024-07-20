import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import PasswordResetToken from '../models/passwordResetTokenModel.js'

dotenv.config()

const generateJWTToken = (userId)  => {
    const token = jwt.sign({userId}, process.env.JWT_SECRET, { expiresIn: "1h"})
    
    return token
}


export { generateJWTToken }
