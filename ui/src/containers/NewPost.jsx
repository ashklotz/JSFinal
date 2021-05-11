import React, { useState } from 'react';
import { Card, CardActions, CardContent, Button,
   makeStyles, TextField } from '@material-ui/core/';
import { Link } from 'react-router-dom';
import superagent from 'superagent'



   const useStyles = makeStyles({
    root: {
      maxWidth: '50%',
      marginLeft: '25%'
    },
    content: {
      display: 'inline-block',
      margin: '0 2px',
    },
    title: {
      fontSize: '1.5em',
    },
  });

  const createPost = async(post) => {
    const URL = 'http://localhost:3001/create'
    try{
    await superagent.post(URL)
      .send({title: post.title, content: post.content})
    }catch(err){

    }
  }

const NewPost = () => {
  const classes = useStyles();
  const [ Title, setTitle ] = useState("")
  const [ Content, setContent ] = useState("")

    return (
      <body>
        <Card className={classes.root}>
          <CardContent>
            <TextField onChange={(e)=>{
              setTitle(e.target.value)
            }} fullWidth id="title" label="Post Title" />
            <TextField onChange={(e)=>{
              setContent(e.target.value)
            }} fullWidth id="content" label="Post Content" multiline/>
          </CardContent>
          <CardActions>
            <Link to="/">
              <Button onClick={()=>{
                createPost({title: Title, content: Content})
              }} size="small">Add Post</Button>
            </Link>
          </CardActions>
        </Card>
      </body>
    )
}

export default NewPost