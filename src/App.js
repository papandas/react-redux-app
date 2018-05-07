import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux'

import Posts from "./components/Posts";
import PostForm from "./components/Postform";
import store from "./Store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React & Redux Simple App</h1>
            
          </header>
          <br/>
          <p>With the help of React & Redux we will post our message to https://jsonplaceholder.typicode.com/posts and record the Response back in our react application.</p>
          <br/>
          <section className="bodyCont">
            <PostForm/>
            <hr/>
            <Posts/>
          </section>
        </div>
      </Provider>
    );
  }
}

export default App;
