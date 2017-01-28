import { Component, PropTypes } from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import App from '../components/App';
import Demo from '../components/Demo';

export default class Routes extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    getState: PropTypes.func.isRequired
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
          <IndexRoute component={Demo}/>
        </Route>
      </Router>
    );
  }
}
