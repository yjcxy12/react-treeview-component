import React, { Component, PropTypes } from 'react';

class TreenodeIcon extends Component {
  render() {
    const { icon, handleIconClick } = this.props;
    return (
      <span
        className={ `treenode-icon ${icon}` }
        onClick={ handleIconClick }></span>
    );
  }
}

TreenodeIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  handleIconClick: PropTypes.func.isRequired
};

export default TreenodeIcon;
