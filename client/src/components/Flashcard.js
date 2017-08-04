import React, {Component} from "react";
import PropTypes from "prop-types";
import DetailGameView from "./DetailGameView";
import Lifecount from "./Lifecount";
import {NavLink} from "react-router-dom";
import {Button, Jumbotron} from "react-bootstrap";

class Flashcard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameOn: false,
      nextCard: true,
      randomNum: null,
      userChange: {
        gamesPlayed: null,
        level: null
      },
      life: 5,
      numCorrectWords: 0
    };
  }
  componentDidMount() {
    this.props.loadWordList();
    this.props.loadUser();
  }
  getRandomInt() {
    this.setState({
      randomNum: Math.floor(Math.random() * this.props.wordList.length),
    });
  }
  resetGame(e) {
    e.preventDefault();
    // debugger;
    const currentRN = this.state.randomNum;
    if (!this.state.nextCard) {
      console.log("Sorry, please submit a value!");
    } else {
      this.setState({
        randomNum: Math.floor(Math.random() * this.props.wordList.length),
        nextCard: false
      }, () => {
        if (currentRN === this.state.randomNum) {
          this.getRandomInt();
        } else {
          return;
        }
      });
    }
  }
  handleLife(attempt) {
    const currentLife = this.state.life;
    if (attempt) {
      this.setState({
        life: currentLife + 1,
        numCorrectWords: this.state.numCorrectWords + 1
      }, () => this.determineLose());
    } else {
      this.setState({
        life: currentLife - 2
      }, () => this.determineLose());
    }
  }
  determineLose() {
    const gamesPlayedBefore = this.state.userChange.gamesPlayed;
    if (this.state.life <= 0 ) {
      this.setState({
        gameOn: false,
        userChange: {
          gamesPlayed: gamesPlayedBefore + 1
        }}, () => this.passUserToRedux(this.state));
    }
  }
  proveGuessText(word, attempt) {
    this.props.practice(word);
    this.handleLife(attempt);
    // on each child onSubmit() event, toggle the nextCard state
    this.setState({
      nextCard: true
    });
  }
  toggleGame(e) {
    // always prevent default events lest an infinite loop stacks over
    e.preventDefault();
    console.log("toggleGame started");
    const user = this.props.user[0];
    const gamesPlayedBefore = user.gamesPlayed;
    this.setState({
      gameOn: !this.state.gameOn,
      userChange: {
        gamesPlayed: this.state.gameOn ? gamesPlayedBefore + 1 : gamesPlayedBefore
      }}, () => this.updateUserLevel(this.state));
  }
  calculateUserLevel(gamesPlayed) {
    console.log("calculateUserLevel started", gamesPlayed);
    if (gamesPlayed < 10) {
      return 1;
    } else if (gamesPlayed >= 10 && gamesPlayed < 145) {
      return Math.floor((2 + (gamesPlayed - 10) / 15));
    } else if (gamesPlayed >= 145 && gamesPlayed < 1145) {
      return Math.floor((10 + (gamesPlayed - 145) / 25));
    }
    return Math.floor((50 + (gamesPlayed - 1145) / 50));
    // following is the default scenario, no need to use else
  }
  updateUserLevel(state) {
    const games = state.userChange.gamesPlayed;
    console.log("updateUserLevel started", games);
    this.setState({
      userChange: {
        gamesPlayed: games,
        level: this.calculateUserLevel(games)
      }
    }, () => this.passUserToRedux(this.state));
  }
  passUserToRedux(state) {
    const changedUser = state.userChange;
    console.log("passUserToRedux started", changedUser);
    const holder = Object.assign(
      {}, this.props.user[0],
      changedUser
    );
    this.props.updateUser(holder);
  }
  render() {
    return (
      <div>
        <Button bsStyle="primary" bsSize="large" block
          onClick={e => this.toggleGame(e)}>
          {this.state.gameOn ? "Quit" : "Start a new game"}
        </Button>
        <Jumbotron>
          {this.state.gameOn ?
            <div>
              <Lifecount life={this.state.life} />
              {this.state.randomNum || this.state.randomNum === 0 ?
                <DetailGameView
                  index={this.state.randomNum}
                  wordList={this.props.wordList}
                  nextCard={this.state.nextCard}
                  handleGuessText={
                    (word, attempt) =>
                    this.proveGuessText(word, attempt)
                  }
                /> : null}
              <Button bsSize="large" block className="btn-next-word"
                // this function should reset all the sub states
                onClick={e => this.resetGame(e)}
              >Next Word</Button>
            </div> :
          null}
        </Jumbotron>
        <br />
        {this.state.life <= 0 ?
          <div>
            {this.state.numCorrectWords > 0 ?
              <div>
                <span>Good game! You have learned </span>
                <span>{this.state.numCorrectWords} words.
                Congratulations! </span>
              </div> :
              <div>
                <span>Oh, seems like someone needs to hit the book!</span>
              </div>
            }
          </div> : null
        }
        <Button>
          <NavLink className="back" to={"/"}>Back</NavLink>
        </Button>
      </div>
    );
  }
}

Flashcard.propTypes = {
  wordList: PropTypes.array,
  user: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
  loadWordList: PropTypes.func,
  loadUser: PropTypes.func,
  updateUser: PropTypes.func,
  practice: PropTypes.func
};

export default Flashcard;

/*
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
*/
