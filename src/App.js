import React from 'react';
import './App.css';
import Home from './components/Home'
import About from './components/About';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Nav from './components/Nav'

class App extends React.Component{
  state = {
    pageTitle: "Contact",
    basketItems: 0
  }

  addProduct = () => {
    this.setState({
      basketItems: this.state.basketItems + 1
    })
  }
  render(){

    //variables added after render but before return
    let pages = 10
    return(
      <BrowserRouter>
        <React.Fragment>
        <div>
        <Nav items = {this.state.basketItems}/>
          <Switch>
            <Route exact path="/" render={ () => <Home today="Tuesday" title = "Home" pagesNumber = {pages} productFunc={this.addProduct}/>}/>
            <Route path="/about" render={ () => <About title="about" pagesNumber={20}/> }/>
          </Switch>
        </div>
      </React.Fragment>
      </BrowserRouter>
    )
  }
}

export default App;
