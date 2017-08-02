import React, {Component} from "react";
import PropTypes from "prop-types";
import DetailGameView from "./DetailGameView";
import {Link} from "react-router-dom";

class Flashcard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameOn: false,
      nextCard: false,
      randomNum: null,
      guessText: "",
      userChange: {
        gamesPlayed: null
      }
    };
  }
  componentDidMount() {
    this.props.loadWordList();
    this.props.loadUser();
  }
  getRandomInt(e) {
    e.preventDefault();
    this.setState({
      randomNum: Math.floor(Math.random() * this.props.wordList.length)
    });
  }
  proveGuessText(word) {
    this.props.practice(word);
  }
  toggleGame(e) {
    // always prevent default events lest an infinite loop stacks over
    e.preventDefault();
    const user = this.props.user[0];
    const gamesPlayedBefore = user.gamesPlayed;
    this.setState({
      gameOn: !this.state.gameOn,
      userChange: {
        gamesPlayed: this.state.gameOn ? gamesPlayedBefore + 1 : null
      }}, () => this.passUserToRedux(this.state.userChange));
  }
  passUserToRedux(changedUser) {
    const holder = Object.assign(
      {}, this.props.user[0],
      changedUser
    );
    this.props.updateUser(holder);
  }
  render() {
    return (
      <div>
        <button
          onClick={e => this.toggleGame(e)}>
          {this.state.gameOn ? "Quit" : "Start"}
        </button>
        {this.state.gameOn ?
          <div>
            <button
              onClick={e => this.getRandomInt(e)}
            >Generate Word</button>
            {this.state.randomNum || this.state.randomNum === 0 ?
              <DetailGameView
                index={this.state.randomNum}
                wordList={this.props.wordList}
                handleGuessText={
                  (word) =>
                  this.proveGuessText(word)
                }
              /> : null}
          </div> :
        null}
        <br />
        <Link to="/">Back</Link>
      </div>
    );
  }
}

// class Flashcard extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       gameOn: false,
//       nextCard: false,
//       guessText: "",
//       randomInt: null
//     };
//     if (this.state.nextCard) {
//       //
//     }
//   }
//   componentWillMount() {
//     this.props.loadWordList();
//   }
//   guessHandler(e) {
//     this.setState({
//       guessText: e.target.value
//     });
//   }
//   handleForm(e, key) {
//     e.preventDefault();
//     if (this.state.searchText === key) {
//       this.setState({
//         nextCard: true
//       });
//     }
//   }
//   getRandomInt() {
//     return Math.floor(Math.random() * this.props.wordList.length);
//   }
//   toggleGame() {
//     this.setState({
//       gameOn: !this.state.gameOn
//     });
//   }
//   render() {
//     debugger;
//     const {gameOn} = this.state;
//     const cardIndex = this.getRandomInt();
//     const cardInPlay = this.props.wordList[cardIndex];
//     // const key = cardInPlay.word;
//     const key = "athens";
//     return (
//       <div>
//         <div>
//           <button>Start a game</button>
//         </div>
//         {gameOn ?
//           <div>
//           /* <h2>{cardInPlay.definition}</h2> */
//             <form onSubmit={e => this.handleForm(e, key)}>
//               <input
//                 className="guessBox"
//                 type="text"
//                 value={this.state.guessBox}
//                 onChange={e => this.guessHandler(e)}
//                 />
//             </form>
//           </div> : null}
//         <br />
//         <Link to={"/"}>Back</Link>
//       </div>
//     );
//   }
// }

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
