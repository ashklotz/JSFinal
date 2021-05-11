const Posts = require('../models/posts')

const updatePost = async (req, res, next) => {
    
    try{
        const post = new Posts({
            title: req.body.title,
            content: req.body.content,
        })
        const result = await post.save()

        console.log('created post')
        res.send(result)
    }
    catch(err){
        console.log(err)
        res.status(400).send('bad request')
    }
}

module.exports = updatePost