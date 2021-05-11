const Posts = require('../models/posts')

const getPosts = async (req, res, next) => {
    
    try{
        const posts = await Posts.find({}, 'title content')
        res.send(posts)
    }
    catch(err){
        console.log(err)
        res.status(400).send('bad request')
    }
}

module.exports = getPosts