import { useEffect, useState } from 'react'
import { Card, CardActions, CardContent, Button, 
    Typography, makeStyles } from '@material-ui/core/';
import superagent from 'superagent'
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
      maxWidth: '50%',
      marginBottom: '1%',
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

const Home = (props) => {
    const URL = 'http://localhost:3001/getAll'
    const classes = useStyles();
    const [ posts, setPosts ] = useState([])

    const getPosts = async() => {
        const response = await superagent.get(URL)
        const resObj = response.body
        setPosts(resObj)
    }
    const delPost = async(delURL) => {
        await superagent.delete(delURL)
        getPosts()
    }
    useEffect(() => {
        getPosts()
    }, [posts])

    return (
        <body>
            <div>
                {posts.map(post => {
                    return(
                    <Card variant='outlined' className={classes.root}>
                        <CardContent>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                               {post.title}
                            </Typography>
                            <Typography className={classes.content} variant="body2" component="p">
                                {post.content}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button onClick={()=>{
                                delPost(`http://localhost:3001/deletePost?id=${post._id}`)
                            }} size="small">Delete</Button>        
                            <Link to={{pathname: "/updatePost", state: post}}>
                                <Button size="small">Update</Button>
                            </Link>
                        </CardActions>
                    </Card>
                )})}
            </div>
        </body>
    )
}

export default Home