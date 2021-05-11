import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './containers/Home'
import NewPost from './containers/NewPost'
import NavBar from './components/NavBar'
import UpdatePost from './containers/UpdatePost'


const Index = () => {
    return (
        <BrowserRouter>
            <NavBar style={{marginBottom: '10px'}} />
            <Route component={Home} exact path='/' />
            <Route component={NewPost} exact path='/newPost' />
            <Route component={UpdatePost} exact path='/updatePost' />
        </BrowserRouter>
    )
}

ReactDOM.render(<Index />, document.querySelector('#root'))