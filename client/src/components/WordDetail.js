import React from "react";
import PropTypes from "prop-types";

//eslint-disable-next-line
function WordDetail(props) {
  const {item} = props;
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
    </div>
  );
}

WordDetail.propTypes = {
  item: PropTypes.object.isRequired
};

export default WordDetail;
