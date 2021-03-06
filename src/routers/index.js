import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter ,HashRouter} from 'react-router-dom';
import { Router, Route,Switch ,Redirect} from 'react-router'
import Home from '../components/home/Home'
import Nav1 from '../components/nav/Nav1'

import Nav from '../containers/NavContainer'

import Computer from '../components/host/host'
import App from '../App'

const NotFound=()=>(
  <div>404</div>
)
export default class RouterIndex extends Component {
  updateHandle(){
    console.log("换了一页")
}
render(){
    return(
      <BrowserRouter>
        <div>
          <Switch>
          <Redirect exact from='/' to='/home'/>
            <Route path="/" component={App} exact />
            {/* <Route path="/test" component={Computer} /> */}
            <Route path="/home" component={Home} />
            <Route path="/t" component={Nav1} />

            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
}
}