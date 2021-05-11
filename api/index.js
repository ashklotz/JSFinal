const express = require('express')
const app = express()
const { corsOptionsRequests, corsSimpleRequests } = require ('./middleware/cors')
const bodyParser = require('body-parser')
const removePoweredBy = require('./middleware/removePoweredBy')
const createPost = require('./services/createPost')
const getPosts = require('./services/getPosts')
const getSinglePost = require('./services/getSinglePost')
const deletePost = require('./services/deletePost')
const updatePost = require('./services/updatePost')


app.options('*', corsOptionsRequests)
app.use(corsSimpleRequests)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(removePoweredBy)

app.get('/getAll', getPosts)
app.get('/getSinglePost', getSinglePost)
app.post('/create', createPost)
app.post('/update', updatePost)
app.delete('/deletePost', deletePost)


module.exports = app