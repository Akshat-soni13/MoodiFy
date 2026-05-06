const userModel = require("../models/user.model")
const jwt = require("jsonwebtoken")
const blackListModel = require("../models/blacklist.model")
const redis = require("../config/cache")

async function authUser(req,res,next)
{
    const token = req.cookies.token
    if (!token)
    {
        return res.status(401).json({
            message:"Token Not provided"
        })
    }
    // use of mongoDB find Black List 
    // const isTokenBlackListed = await blackListModel.findOne({
    //     token
    // })

    // use of redis token blacklist check
    const isTokenBlackListed = await redis.get(token)

    if (isTokenBlackListed)
    {
        return res.send(401).json({
            message:"Invalid Token"
        })
    }
    try 
    {
        const decoded = jwt.verify(
        token,
        process.env.JWT_SECRET
        ) 
        req.user = decoded
        next()
        
    }catch(err)
    {
        return res.status(401).json({
            message:"Invalid Token"
        })
    }

}

module.exports = {authUser}