
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
//import { BrowserRouter as Router , Route} from 'react-router-dom';

export default class App extends Component {
  apiKey=process.env.REACT_APP_NEWS_API
  state={
    progress:0
  }
  setProgress=(progress)=>{
    this.setState({
      progress : progress
    })
  }
  c = 'John';
  render() {
    return (
      <div>
        <Navbar />
        <LoadingBar height={4}
        color='#f11946'
        progress={this.state.progress}
      />
        <News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={7} country="in" category="general" />
      </div>
    )
  }
}