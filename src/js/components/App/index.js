import { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions from '../../actions/user';

class App extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
    getUser: PropTypes.func.isRequired
  }

  constructor () {
    super();
  }

  componentWillMount () {
    this.props.getUser()
    .then(console.log);
  }

  render () {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { ...state };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { ...userActions },
    dispatch
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
