import React, {Component} from "react";
import PropTypes from "prop-types";
import {Form, FormControl} from "react-bootstrap";

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
  calculateWordLevel(times) {
    if (times < 3) {
      return 1;
    } else if (times >= 3 && times < 6) {
      return 2;
    } else if (times >= 6 && times < 10) {
      return 3;
    } else if (times >= 10 && times < 20) {
      return 4;
    }
    return 5;
  }
  updateWordLevel(index, wordChange, attempt) {
    const repeatedTimesBefore = wordChange.repeatedTimes;
    this.setState({
      wordChange: {
        masterLevel: this.calculateWordLevel(repeatedTimesBefore),
        repeatedTimes: repeatedTimesBefore
      }
    }, () => this.passWordToRedux(index, attempt));
  }
  handleGuessText(e) {
    e.preventDefault();
    const {index} = this.props;
    const card = this.props.wordList[index];
    if (this.state.guessText === card.word) {
      this.setState({
        attempt: true,
        wordChange: {
          repeatedTimes: card.repeatedTimes + 1
        }
        // async callback function to pass the object to upper level
      }, () => this.updateWordLevel(index, this.state.wordChange, this.state.attempt));
    } else {
      this.setState({
        attempt: false,
        wordChange: {
          repeatedTimes: card.repeatedTimes + 1
        }
      }, () => this.passWordToRedux(index, this.state.attempt));
    }
  }
  passWordToRedux(index, attempt) {
    const holder = Object.assign(
      {}, this.props.wordList[index],
      this.state.wordChange
    );
    this.props.handleGuessText(holder, attempt);
  }
  render() {
    // eslint-disable-next-line
    const {index, nextCard} = this.props;
    const cardInPlay = this.props.wordList[index];
    return (
      <div>
        <Form onSubmit={e => this.handleGuessText(e)}>
          {cardInPlay ?
            <h2>Definition: {cardInPlay.definition}</h2> :
          null}
          <br />
          {nextCard && this.state.attempt ?
            null :
            <FormControl
              onChange={this.storeGuessText.bind(this)}
              placeholder="What's that? Make a guess and enter!"
            />
          }
          <div>
            {this.state.attempt && nextCard ?
              <h3>Congratulations, you are correct!</h3> :
              null
            }
            {this.state.attempt === false && nextCard ?
              <h3>That is wrong, try again!</h3> :
              null
            }
          </div>
        </Form>
      </div>
    );
  }
}

DetailGameView.propTypes = {
  index: PropTypes.number,
  wordList: PropTypes.array,
  nextCard: PropTypes.bool,
  handleGuessText: PropTypes.func
};

export default DetailGameView;
