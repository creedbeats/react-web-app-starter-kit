import React from 'react';

export default class App extends React.Component {
  static propTypes = {
    children: React.PropTypes.element.isRequired
  }

  constructor () {
    super();
  }

  render () {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
