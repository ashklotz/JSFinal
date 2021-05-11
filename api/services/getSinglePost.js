const Posts = require('../models/posts')

const getSinglePost = async (req, res, next) => {
    
    try{
        const post = await Posts.find({
            _id: req.query.id
        }, 'title content')
        res.send(post)
    }
    catch(err){
        console.log(err)
        res.status(400).send('bad request')
    }
}

module.exports = getSinglePost