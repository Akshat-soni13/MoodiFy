const express = require("express")

const router = express.Router()
const upload = require("../middleWare/upload.middleware")
const SongController = require("../controllers/song.controller")

router.post("/",upload.single("song"),SongController.uploadSong)



module.exports = router