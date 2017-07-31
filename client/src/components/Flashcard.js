import React, {Component} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

class Flashcard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameOn: false,
      nextCard: false,
      guessText: "",
      randomInt: null
    };
    if (this.state.nextCard) {
      //
    }
  }
  componentWillMount() {
    this.props.loadWordList();
  }
  guessHandler(e) {
    this.setState({
      guessText: e.target.value
    });
  }
  handleForm(e, key) {
    e.preventDefault();
    if (this.state.searchText === key) {
      this.setState({
        nextCard: true
      });
    }
  }
  getRandomInt() {
    return Math.floor(Math.random() * this.props.wordList.length);
  }
  toggleGame() {
    this.setState({
      gameOn: !this.state.gameOn
    });
  }
  render() {
    debugger;
    const {gameOn} = this.state;
    const cardIndex = this.getRandomInt();
    const cardInPlay = this.props.wordList[cardIndex];
    // const key = cardInPlay.word;
    const key = "athens";
    return (
      <div>
        <div>
          <button>Start a game</button>
        </div>
        {gameOn ?
          <div>
            <h2>{cardInPlay.definition}</h2>
            <form onSubmit={e => this.handleForm(e, key)}>
              <input
                className="guessBox"
                type="text"
                value={this.state.guessBox}
                onChange={e => this.guessHandler(e)}
                />
            </form>
          </div> : null}
        <br />
        <Link to={"/"}>Back</Link>
      </div>
    );
  }
}

Flashcard.propTypes = {
  wordList: PropTypes.array,
  loadWordList: PropTypes.func
};

export default Flashcard;
