import { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class Home extends Component {
  static propTypes = {
    user: PropTypes.object
  };

  constructor () {
    super();
  }

  render () {
    return (
      <div>
        <h2>Hello User</h2>
        <pre>{JSON.stringify(this.props.user, null, 2)}</pre>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(Home);
