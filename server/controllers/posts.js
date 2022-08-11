import asyncHandler from 'express-async-handler'
import mongoose from 'mongoose'

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

export const updatePost = asyncHandler(async (req, res) => {
  const { id: _id } = req.params
  const post = req.body

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send('No post with that id')
  }

  const updatedPost = await PostMessage.findByIdAndUpdate(_id, post, {
    new: true,
  })

  res.json(updatePost)
})
