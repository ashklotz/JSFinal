const Posts = require('../models/posts')

const deletePost = async (req, res, next) => {
    
    try{
        post = await Posts.findByIdAndRemove(req.query.id)
        res.send({
            post,
            deleted:true
        })
    }
    catch(err){
        console.log(err)
        res.status(400).send('bad request')
    }
}

module.exports = deletePost