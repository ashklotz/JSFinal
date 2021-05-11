import React from 'react'
import { Button } from '@material-ui/core'
import { Link } from 'react-router-dom'

class NavBar extends React.Component {
  render() {
    return (
      <div style={{ position: 'relative', left: '38%'}}>
        <Link to='/'>
          <Button style={{ marginRight: '1%', fontSize: '1.4em'}} variant='contained' color='primary'>
            View All
          </Button>
        </Link>

        <Link to='/newPost'>
          <Button style={{ fontSize: '1.4em' }} variant='contained' color='primary'>
            New Post
          </Button>
        </Link>
      </div>
    )
  }
}

export default NavBar