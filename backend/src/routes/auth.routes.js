const {Router} = require("express")

const router = Router()
const autContoller = require("../controllers/auth.controller")
const authMiddleWare = require("../middleWare/auht.middleware")

router.post("/register",autContoller.registerUser)
router.post("/login",autContoller.loginUSer)
router.get("/get-me",authMiddleWare.authUser,autContoller.getMe)

module.exports = router 