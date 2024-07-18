import express from "express";
import { isAdmin, requiredSignIn } from "../middlewares/authMiddleware.js";
import {
  brainTreePaymentController,
  braintreeTokenController,
  craeteProductController,
  deleteProductController,
  getProductController,
  getSingleProductController,
  productCategoryController,
  productCountController,
  productFiltersController,
  productListController,
  productPhotoController,
  relatedProductController,
  searchProductController,
  updateProductController,
} from "../controllers/ProductController.js";
import formidable from "express-formidable";
const router = express.Router();

//routes
router.post(
  "/create-product",
  requiredSignIn,
  isAdmin,
  formidable(),
  craeteProductController
);

//routes
router.put(
    "/update-product/:pid",
    requiredSignIn,
    isAdmin,
    formidable(),
    updateProductController
  );

//get products
router.get("/get-product", getProductController);

//get single product
router.get("/get-product/:slug", getSingleProductController);

//get photo
router.get("/product-photo/:pid", productPhotoController);

//delete product
router.delete("/delete-product/:pid", deleteProductController);

//Filter products
router.post('/product-filters', productFiltersController);

///product count
router.get('/product-count', productCountController);

///product per page
router.get('/product-list/:page', productListController);

//search product
router.get('/search/:keyword', searchProductController);

//similar prodduct

router.get('/related-product/:pid/:cid', relatedProductController);

//Category wise product
router.get('/product-category/:slug', productCategoryController);

//payment routes
//token
router.get('/braintree/token', braintreeTokenController);

//payments
router.post('/braintree/payment',requiredSignIn, brainTreePaymentController);

export default router;
