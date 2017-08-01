import React, {Component} from "react";
import PropTypes from "prop-types";

class DetailGameView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      guessText: "",
      attempt: null,
      wordChange: {
        masterLevel: 0,
        repeatedTimes: 0
      }
    };
  }
  storeGuessText(e) {
    this.setState({
      guessText: e.target.value
    });
  }
  handleGuessText(e) {
    e.preventDefault();
    const {index} = this.props;
    if (this.state.guessText === this.props.wordList[index].word) {
      this.setState({
        attempt: true,
        wordChange: {
          masterLevel: this.props.wordList[index].masterLevel + 1,
          repeatedTimes: this.props.wordList[index].repeatedTimes + 1
        }
      });
    } else {
      this.setState({
        attempt: false,
        wordChange: {
          repeatedTimes: this.props.wordList[index].repeatedTimes + 1
        }
      });
    }
    const holder = Object.assign(
      {}, this.props.wordList[index], 
      this.state.wordChange
    );
    this.props.handleGuessText(holder);
  }
  render() {
    const {index} = this.props;
    const cardInPlay = this.props.wordList[index];
    return (
      <div>
        <form onSubmit={e => this.handleGuessText(e)}>
          {cardInPlay ?
            <h2>Definition: {cardInPlay.definition}</h2> :
          null}
          <br />
          <input
            onChange={this.storeGuessText.bind(this)}
            placeholder="Please enter the word"
          />
          {this.state.attempt === true ?
            <h3>Congratulations, you are correct!</h3> :
            null
          }
          {this.state.attempt === false ?
            <h3>That is wrong, try again!</h3> :
            null
          }
        </form>
      </div>
    );
  }
}

DetailGameView.propTypes = {
  index: PropTypes.number,
  wordList: PropTypes.array,
  handleGuessText: PropTypes.func
};

export default DetailGameView;
