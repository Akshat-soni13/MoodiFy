const upload = require("../middleWare/upload.middleware")

const songModel = require("../models/song.model")
const id3 = require("node-id3")
const StorageService = require("../services/storage.service")

async function uploadSong(req,res)
{

    const songBuffer = req.file.buffer
    const {mood} = req.body

    // id3 package is used to read file deatils 
  const tags=  id3.read(req.file.buffer)
  console.log(tags)
  const songFile= await StorageService.uploadFile({
    buffer:songBuffer,
    filename: tags.title,
    folder:"/cohrt-2/modify/songs"
  })
  const posterFile = await StorageService.uploadFile({

    buffer: tags.image.imageBuffer,
    filename:tags.title + "jpeg",
    folder:"/cohrt-2/modify/posters"
  })

  const song = await songModel.create({
    title: tags.title,
    url: songFile.url,
    posterUrl : posterFile.url,
    mood
  })

  res.status(201).json({

    message:"Song created Sucessfuly "

  })

}

module.exports = {uploadSong}