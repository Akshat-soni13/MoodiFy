const {Router} = require("express")

const router = Router()
const autContoller = require("../controllers/auth.controller")

router.post("/register",autContoller.registerUser)