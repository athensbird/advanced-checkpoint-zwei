import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

function practice(e, item) {
  e.preventDefault();
  this.props.practice(item);
}

function WordDetail(props) {
  const wordId = props.match.params.id;
  // eslint-disable-next-line
  const item = props.wordList.find(w => w._id == wordId) || [];
  return (
    <div key={item._id}>
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
      <button onClick={e => practice(e, item)}>Practice</button>
      <button onClick={e => props.deleteWord(e, item)}>Delete</button>
      <br />
      <Link to={"/favorites/"}>Back to List</Link>
      <br />
      <Link to={"/"}>Back to Homepage</Link>
    </div>
  );
}

WordDetail.propTypes = {
  item: PropTypes.object.isRequired,
  match: PropTypes.object,
  wordList: PropTypes.array,
  deleteWord: PropTypes.func
};

export default WordDetail;
