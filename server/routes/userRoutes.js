const express= require("express")
const router = express.Router()
const {auth} = require("../middleware/authMiddleware")
const userController = require("../controller/userController")
const roomController = require("../controller/roomController")

// router.post('/', userController.userAuth);
router.post("/register", userController.registerUser)
router.post("/login", userController.loginUser)

router.post("/addRoom", roomController.addNewRoom)
router.get("/getAllRooms", auth, roomController.getRoomDetails)



module.exports = router