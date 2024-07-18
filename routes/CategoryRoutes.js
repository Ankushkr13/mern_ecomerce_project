import express from 'express'
import { isAdmin, requiredSignIn } from '../middlewares/authMiddleware.js'
import { categoryController, createCategoryController, deleteCategoryController, singleCategoryController, updateCategoryController } from '../controllers/CategoryController.js'

const router = express.Router()

//routes 
//CREATE CATEGORY
router.post("/create-category", requiredSignIn, isAdmin, createCategoryController)

//UPDATE CATEGORY

router.put("/update-category/:id", requiredSignIn, isAdmin, updateCategoryController)


//GET ALL Category

router.get('/get-category', categoryController)

//GET SINGLE Category

router.get('/single-category/:slug', singleCategoryController)

//DELETE CATEGORY

router.delete('/delete-category/:id', requiredSignIn, isAdmin, deleteCategoryController)

export default router