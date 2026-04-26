const Redis= require("ioredis").default
// default genrALLY ONLY USE HITA HAI SO THAT SUGGESTION AJYA BECAUSE WE USE REQUIRED AGAR HAMNE USI KIYA IMPORT TGEN NO NEEED TO DO THAT 

const redis = new Redis({
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
    password: process.env.REDIS_PASS
})


redis.on("connect",()=>{
    console.log("Server is Connected to Redis")
})

redis.on("error",(err)=>{
    console.log(err)
})

module.exports = redis

