import express from "express";
import { registerController, loginController, testController, forgotpasswordController, updateProfileController, getOrdersController, getAllOrdersController, orderStatusController } from "../controllers/authController.js";
import { isAdmin, requiredSignIn } from "../middlewares/authMiddleware.js";

//router object
const router = express.Router();

//routing
//REGISTER || POST METHOD
router.post("/register", registerController); // MVC PATTERN FOLLOW THAT IS WE WILL MAKE A SEPRATE CONTROLLER CREATING

//LOGIN || METHOD POST
router.post("/login", loginController);


//Forget-password || POST
router.post('/forgot-password', forgotpasswordController)

//Test || GET METHOD
router.get("/test", requiredSignIn, isAdmin, testController); // token check , admin check 2 middle ware

//protected user route auth
router.get('/user-auth', requiredSignIn, (req, res) => {
    res.status(200).send({ ok: true});
})


//protected admin route auth
router.get('/admin-auth', requiredSignIn, isAdmin, (req, res) => {
    res.status(200).send({ ok: true});
})

//update profile
router.put('/profile', requiredSignIn, updateProfileController);

//orders
router.get('/orders', requiredSignIn, getOrdersController);

//all orders
router.get('/all-orders', requiredSignIn, isAdmin, getAllOrdersController);


// order status update
router.put("/order-status/:orderId", requiredSignIn, isAdmin, orderStatusController);

export default router;
