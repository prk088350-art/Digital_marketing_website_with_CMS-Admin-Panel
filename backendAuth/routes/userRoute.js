import express from "express"
import { changePassword, forgotPassword, loginUser, logoutUser, registerUser, verification, verifyOTP } from "../controller/userController.js"
import { isAuthenticated } from "../middleware/isAuthenticated.js"

const router = express.Router()

router.post('/register',registerUser)
router.post('/verification', verification)
router.post('/login', loginUser)
router.post('/logout', isAuthenticated, logoutUser)
router.post('/forgotPassword', forgotPassword)
router.post('/verifyOTP/:email', verifyOTP)
router.post('/changePassword/:email', changePassword)


export default router;