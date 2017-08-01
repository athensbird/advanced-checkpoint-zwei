import React, {Component} from "react";
import PropTypes from "prop-types";

class DetailGameView extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {index} = this.props;
    const cardInPlay = this.props.wordList[index];
    return (
      <div>
        {this.props.index}
        {cardInPlay ?
          <div>cardInPlay exists!</div> :
        null}
      </div>
    );
  }
}

DetailGameView.propTypes = {
  index: PropTypes.number,
  wordList: PropTypes.array
};

export default DetailGameView;
