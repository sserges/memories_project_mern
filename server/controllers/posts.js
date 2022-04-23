import asyncHandler from 'express-async-handler'

import PostMessage from '../models/postMessage.js'

export const getPosts = asyncHandler(async (req, res) => {
  const postMessages = await PostMessage.find()

  res.json(postMessages)
})

export const createPost = asyncHandler(async (req, res) => {
  const post = req.body
  const newPost = await new PostMessage(post).save()

  res.status(201).json(newPost)
})
