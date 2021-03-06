import React, {Component} from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom'
import Header from './components/Header'
import './App.css'
import LoginScreen from './components/loginScreen'
import Table from './components/Table'
import EditTask from './components/editTaskScreen/EditTask'

class App extends Component {
  render(){
    return (
      <Router history={this.props.history}>
        <div className="App">
          <Header/>
          <Switch>
            <Route path='/login' component={LoginScreen}/>
            <Table/>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
