import React from 'react';
import { Router, Route, IndexRedirect } from 'react-router';
import App from '../components/App';
import Home from '../components/Home';

export default class Routes extends React.Component {
  static propTypes = {
    history: React.PropTypes.object.isRequired,
    getState: React.PropTypes.func.isRequired
  }

  constructor (props) {
    super(props);
    this.getState = this.props.getState;
    this.history = this.props.history;
  }

  render () {
    const { history } = this.props;
    return (
      <Router history={history}>
        <Route path="/" component={App}>
          <IndexRedirect to="sign-in"/>
          <Route path="sign-in" component={Home}/>
        </Route>
      </Router>
    );
  }
}
