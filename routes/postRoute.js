import express from 'express'

const router = express.Router()

import { createPost, getSinglePost, getAllPost, updatePost, deletePost } from '../controllers/postController.js'

router.post("/", createPost)

router.get("/:id", getSinglePost)

router.get("/", getAllPost)

router.put("/:id", updatePost)

router.delete("/:id", deletePost)

export default router