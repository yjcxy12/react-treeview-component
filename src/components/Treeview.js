import React, { Component, PropTypes } from 'react';
import Treenode from './Treenode.js';

class Treeview extends Component {
  render() {
    const {
      model,
      structure,
      handleArrowClick,
      handleIconClick,
      handleTextClick
    } = this.props;

    return (
      <div>
        <Treenode
          id={ structure.id }
          key={ structure.id }
          model={ model }
          childrenNodes={ structure.children }
          nodeModel={ model[structure.id] }
          handleArrowClick={ handleArrowClick }
          handleTextClick={ handleTextClick }
          handleIconClick={ handleIconClick } />
      </div>
    );
  }
}

Treeview.propTypes = {
  model: PropTypes.object.isRequired,
  structure: PropTypes.object.isRequired,
  handleArrowClick: PropTypes.func,
  handleIconClick: PropTypes.func,
  handleTextClick: PropTypes.func
};

export default Treeview;
