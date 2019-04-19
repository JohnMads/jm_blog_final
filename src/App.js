import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Blog1 from './components/Blog1';
import Blog2 from './components/Blog2';
import Blog3 from './components/Blog3';
import Blogposts from './components/Blogposts';
import News from './components/News';

class App extends Component {
  
  render() {
    return (
      <BrowserRouter>
        <div className="my-app">
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Blogposts" component={Blogposts} />
            <Route path="/News" component={News} />
            <Route path="/Blog1/:blog_id" component={Blog1} />
            <Route path="/Blog2/:blog2" component={Blog2} />
            <Route path="/Blog3/:blog3" component={Blog3} />
        </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
