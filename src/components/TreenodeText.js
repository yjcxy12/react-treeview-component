import React, { Component, PropTypes } from 'react';

class TreenodeText extends Component {
  render() {
    const { text, handleTextClick } = this.props;
    return (
      <span
        className="treenode-text"
        onClick={ handleTextClick }>{ text }
      </span>
    );
  }
}
TreenodeText.propTypes = {
  text: PropTypes.string.isRequired,
  handleTextClick: PropTypes.func.isRequired
};

export default TreenodeText;
