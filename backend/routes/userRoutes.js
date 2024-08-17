import express from "express";
import {
  loginUser,
  registerUser,
  logoutUser,
  getSingleUser,
  updateUser,
  getAllUsers,
  getUserById,
  deleteUser,
  updateUserById,
} from "../controllers/userController.js";
import { protect, admin } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/", protect, admin, getAllUsers);
router.get("/profile", protect, getSingleUser);
router.get("/:id", getUserById);
router.post("/login", loginUser);
router.post("/register", registerUser);
router.post("/logout", protect, logoutUser);
router.put("/edit/profile", protect, updateUser);
router.put("/edit/:id", protect, admin, updateUserById);
router.delete("/:id", protect, admin, deleteUser);

export default router;
