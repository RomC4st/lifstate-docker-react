// import React, { useState } from 'react';
import React, { Component } from 'react'
import style from './App.module.css';
import Test from './component/Test.js'

class App extends Component {

  state = {
    count: 0,
    countChild: 0
  }
  // const[count, setCount] = useState(0);
  liftstate = (countChild) => {
    this.setState({ countChild: countChild })
    // countClickChild = countChild * 2
    // console.log("App:", countClickChild)
  }
  // console.log("App:", countClickChild)
  // componentDidUpdate = (prevState, nextState) => {
  //   console.log(prevState, nextState)
  // }

  render() {
    const { count, countChild } = this.state;
    return (
      <div className={style.App}>
        <header className={style.App_header}>
        </header>
        <p>Vous avez cliqué sur le bouton {count} fois (Composant Parent)</p>
        <p className={style.test}>Opération dans le composant enfant {countChild} affiché dans le composant parent</p>
        <button onClick={() => this.setState({ count: count + 1 })}>
          Cliquez ici
      </button>
        <Test count={count} liftState={this.liftstate} />
      </div>
    );
  }

}

export default App;
