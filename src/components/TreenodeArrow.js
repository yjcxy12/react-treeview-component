import React, { Component, PropTypes } from 'react';

class TreenodeArrow extends Component {
  render() {
    const { opened, handleArrowClick } = this.props;
    const arrow = opened ? '▼' : '▶';
    return <span onClick={ handleArrowClick }>{ arrow }</span>;
  }
}

TreenodeArrow.propTypes = {
  opened: PropTypes.bool.isRequired,
  handleArrowClick: PropTypes.func.isRequired
};

export default TreenodeArrow;
