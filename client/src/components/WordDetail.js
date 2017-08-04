import React, {Component} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {Table, Button} from "react-bootstrap";

class WordDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deleted: false,
      repeatedTimes: 1
    };
  }
  handleRepeats() {
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
            <Table striped bordered condensed responsive>
              <thead>
                <tr>
                  <th>Word</th>
                  <th>Definiton</th>
                  <th>Repeated Times</th>
                  <th>Master Level</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{item.word}</td>
                  <td>{item.definition}</td>
                  <td>{item.repeatedTimes}</td>
                  <td>{item.masterLevel}</td>
                </tr>
              </tbody>
            </Table>
            <div className="dictionary-form">
              <Button onClick={e => {
                this.props.deleteWord(e, item);
                this.setState({
                  deleted: !this.state.deleted
                });
              }}>Delete this word</Button>
            </div>
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
