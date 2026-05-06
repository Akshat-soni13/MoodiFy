const songModel = require("../models/song.model")
const id3 = require("node-id3")
const StorageService = require("../services/storage.service")

async function uploadSong(req,res)
{

    const songBuffer = req.file.buffer
    console.log(req.file.buffer)
    const {mood} = req.body
    

    console.log(req.body)
    
    // id3 package is used to read file deatils 
    const tags=  id3.read(req.file.buffer)
    // console.log(tags)
    // console.log(tags)
    // console.log(1)
// // console.log(tags)
// console.log(tags.image)
// method 1
  // const songFile= await StorageService.uploadFile({
  //   buffer:songBuffer,
  //   filename: tags.title+".mp3",
  //   folder:"/cohrt-2/modify/songs"
  // })

  // const posterFile = await StorageService.uploadFile({

  //   buffer: tags.image.imageBuffer,
  //   filename:tags.title + ".jpeg",
  //   folder:"/cohrt-2/modify/posters"
  // })
  // below is optimize verison method 2
  const [songFile,posterFile] = await Promise.all([
 StorageService.uploadFile({
        buffer:req.file.buffer,
        filename:tags.title +"mp3",
        folder:'/cohort-2/moodify/songs'
    }),
   StorageService.uploadFile({
        buffer:tags.image.imageBuffer,
        filename:tags.title +"jpeg",
        folder:"/cohort-2/moodify/photos"
    })
])

  // console.log("1")

  const song = await songModel.create({
    title: tags.title,
    url: songFile.url,
    posterUrl : posterFile.url,
    mood
  })
  // console.log("Chefckin")

  // console.log(song)

  res.status(201).json({

    message:"Song created Sucessfuly ",
    song

  })

}

async function getSong(req,res)
{
  const {mood} = req.query
  const song = await songModel.find({
    mood
  })

  res.status(200).json({
    message:"Song Fetched Succesfully",
    song
  })
}

module.exports = {uploadSong,getSong}