import express from "express";

import {
  getPosts,
  getPostsBySearch,
  createPost,
  updatePost,
  deletePost,
  likePost,
  getPost,
  commentPost,
  getPostsByCreator,
} from "../controllers/posts.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/creator", getPostsByCreator);
router.get("/", getPosts);
router.get("/search", getPostsBySearch);
router.get("/:id", getPost);

router.post("/", auth, createPost);
router.post("/:id/commentPost", auth, commentPost);
router.post("/:id", auth, updatePost);

router.patch("/:id/likePost", auth, likePost);

router.delete("/:id", auth, deletePost);

export default router;
