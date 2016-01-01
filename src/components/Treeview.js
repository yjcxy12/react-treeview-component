import React, { Component, PropTypes } from 'react';
import Treenode from './Treenode.js';

class Treeview extends Component {
  createElement(structure) {
    const {
      model,
      handleArrowClick,
      handleIconClick,
      handleTextClick
    } = this.props;
    const childElements = structure.children.length > 0 ?
      structure.children.map((child) => {
        return this.createElement(child);
      }) : null;
    return (
      <Treenode
        id={ structure.id }
        key={ structure.id }
        hasChild={ structure.children.length > 0 }
        initialNodeModel={ model[structure.id] }
        handleArrowClick={ handleArrowClick }
        handleTextClick={ handleTextClick }
        handleIconClick={ handleIconClick } >
        { childElements }
      </Treenode>
    );
  }

  render() {
    const { structure } = this.props;

    return (
      <div>
        { this.createElement.call(this, structure) }
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
