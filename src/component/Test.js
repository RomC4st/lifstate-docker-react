import React, { Component } from 'react';
// import style from '../App.module.css';

class Test extends Component {
  // const [countChild, setCountChild] = useState(1);
  state = {
    count: 0
  }
  // handleChange = (e) => {
  // const count = this.props.count
  // const count_square = count * count
  // // setCountChild(count * count)
  // this.props.liftState(count_square)
  // }
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
        {/* <button onClick={this.handleChange} >Opération dans le composant Parent</button> */}
      </div>
    );
  }

}

export default Test;
