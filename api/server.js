require('dotenv').config()
const mongoose = require('mongoose')
const app = require('./index')

const port = 3001

mongoose.connect(process.env.CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }, err => {
    if (err){
        console.log('\nuh oh, we had an oopsie doodle!\n',err)
        return
    }
    console.log('connected to DB')

    app.listen(port, () => {
        console.log(`listening on port: ${port}`)
    })
})