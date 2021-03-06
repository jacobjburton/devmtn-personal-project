import React, { Component } from 'react';
import './App.css';
import routes from './routes';
import Nav from './components/Nav/Nav';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { getUser } from './ducks/reducer';

class App extends Component 
{
  render() 
  {
    let displayNav = this.props.location.pathname === '/' ? "" : <Nav/>;

    
   

    return (
      <div className="App">
        {displayNav}
        <div className="body">
          {routes}
        </div>
      </div>
    );
  }
}

// function mapStateToProps(state)
// {
//   return (
//   {
//     user: state.user
//   });
// }

export default withRouter(connect(null, { getUser })(App));
