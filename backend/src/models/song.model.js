const mongoose = require("mongoose")

const songSchema= new mongoose.Schema({
    url:
    {
        type:String,
        required: true
    },
    posterUrl:
    {
        type:String,
        required:true
    },
    title:{
        type:String,
        required: true
    },
    mood:{
        type:String,
        enum:{
           values:["sad","happy","surprise"],
           message:" onl 3Mood Available Sad, Happyy and Surprise  "  
        }

    }

})

const songModel = mongoose.model("songs",songSchema)

module.exports = songModel