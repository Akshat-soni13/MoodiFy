const userModel = require("../models/user.model")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

async function registerUser(req,res)
{
    const {username,email,password}=req.body

    const isAlreadyExist= await userModel.findOne({
        $or:[
            {email},
            {username}
        ]
    })

    if (isAlreadyExist)
    {
        return res.status(400).json({
            message:"user with same username or email already exist "
        })
    }

    const hash = await bcrypt.hash(password,10)

    const user = await userModel.create({
        username,
        email,
        password:hash
    })

    const token = jwt.sign(
        {
            id : user._id,
            username : user.username
        },
        process.env.JWT_SECRET,
        {
            expiresIn:"3d"
        }
    )
    
    res.cookie("token",token)
    return res.status(201).json({
        message:"User Registerd Successfully ",
        user:{
            id:user._id,
            username:user.username,
            email:user.email
        }

    }

    )

}

async function loginUSer(req,res)
{
    const {email,password,username}= req.body

    const user = await userModel.findOne({
        $or: 
        [
            {email},
            {username}
        ]
    }).select("+password")

    if (!user)
    {
        return res.status(400).json("Invalid Credentials ")
    }

    const isPasswordValid = await bcrypt.compare(password,user.password)

    if (!isPasswordValid)
    {
        return res.staus(400).json({
            message:"Invalid Credentials"

        })
    }

    const token = jwt.sign(
        {
            id : user._id,
            username : user.username
        },
        process.env.JWT_SECRET,
        {
            expiresIn:"3d"
        }
    )
     return res.status(201).json({
        message:"User LoggedIn  Successfully ",
        user:{
            id:user._id,
            username:user.username,
            email:user.email
        }

    }

    )


}

async function getMe(req,res)
{
    const user = await userModel.findById(req.user.id).select("-password")

    res.status(200).json({
        message:"User Fetch Succeffully",
        user: user

    })
}

module.exports ={registerUser,loginUSer,getMe}