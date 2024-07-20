import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'


const getUser = asyncHandler ( async (req, res) => {
    const { id } = req.params
    const user = await User.findById(id);
  
    if (!user){
        res.status(400)
        throw new Error("User not found")
    };
  
    const { password: pass, ...rest } = user._doc;
  
    res.status(200).json({user: rest, message: "Successful"});
})

export { getUser }