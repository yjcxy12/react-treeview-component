import React, { Component, PropTypes } from 'react';

class TreenodeArrow extends Component {
  render() {
    const { opened, hasChild, handleArrowClick } = this.props;
    const arrow = opened ? '▼' : '▶';
    return (
      <span
        className="treenode-arrow"
        onClick={ handleArrowClick }>
        { hasChild ? arrow : ' ' }
      </span>
    );
  }
}

TreenodeArrow.propTypes = {
  opened: PropTypes.bool.isRequired,
  hasChild: PropTypes.bool.isRequired,
  handleArrowClick: PropTypes.func.isRequired
};

export default TreenodeArrow;
