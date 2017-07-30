import React, {Component} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

class WordDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deleted: false,
      repeatedTimes: 1
    };
  }
  handleRepeats() {
    console.log("Repeat Handler Triggered!");
    this.setState({
      repeatedTimes: this.state.repeatedTimes + 1
    });
  }
  render() {
    const wordId = this.props.match.params.id;
    const {deleted} = this.state;
    // eslint-disable-next-line
    const item = this.props.wordList.find(w => w._id == wordId) || [];
    return (
      <div key={item._id}>
        {deleted ?
          <div>
            <h2>Word Not Found</h2>
          </div> : null}
        {!deleted ?
          <div>
            <table>
              <thead>
                <tr>
                  <th>Word</th>
                  <th>Definiton</th>
                  <th>Repeated Times</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{item.word}</td>
                  <td>{item.definition}</td>
                  <td>{item.repeatedTimes}</td>
                </tr>
              </tbody>
            </table>
            <br />
            <button onClick={e => {
              e.preventDefault();
              this.setState({
                repeatedTimes: this.state.repeatedTimes + 1
              });
              const newState = Object.assign(item, {repeatedTimes: this.state.repeatedTimes});
              this.props.practice(newState);
            }}>Practice</button>
            <button onClick={e => {
              this.props.deleteWord(e, item);
              this.setState({
                deleted: !this.state.deleted
              });
            }}>Delete</button>
            <br />
          </div> : null}
        <Link to={"/favorites/"}>Back to List</Link>
        <br />
        <Link to={"/"}>Back to Homepage</Link>
      </div>
    );
  }
}

WordDetail.propTypes = {
  item: PropTypes.object,
  match: PropTypes.object,
  wordList: PropTypes.array,
  deleteWord: PropTypes.func,
  practice: PropTypes.func
};

export default WordDetail;
