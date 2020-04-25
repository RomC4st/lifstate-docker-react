import React, { Component } from 'react';

class Test extends Component {
  state = {
    count: 0
  }

  componentDidUpdate = () => {
    if (this.props.count !== this.state.count) {
      this.setState({ count: this.props.count }, () => {
        const count_square = this.state.count * this.state.count;
        this.props.liftState(count_square);
      }
      )
    }
  }

  render() {
    const count = this.props.count;
    return (
      <div>
        <p >Vous avez cliqué sur le bouton {count} fois (Composent Enfant)</p>
      </div>
    );
  }

}

export default Test;
