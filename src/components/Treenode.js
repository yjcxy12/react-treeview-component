import React, { Component, PropTypes } from 'react';
import TreenodeArrow from './TreenodeArrow';
import TreenodeIcon from './TreenodeIcon';
import TreenodeText from './TreenodeText';

class Treenode extends Component {
  render() {
    const {
      model,
      handleArrowClick,
      handleIconClick,
      handleTextClick
    } = this.props;

    const childElements = model.children && model.children.length > 0 ?
      model.children.map((child) => {
        return (
          <Treenode
            model={ child }
            handleArrowClick={ handleArrowClick.bind(this, model) }
            handleIconClick={ handleIconClick.bind(this, model) }
            handleTextClick={ handleTextClick.bind(this, model) } />
        );
      }) : null;

    return (
      <div>
        <TreenodeArrow
          opened={ model.initialState.opened }
          handleArrowClick={ handleArrowClick.bind(this, model) } />
        <TreenodeIcon
          icon={ model.icon }
          handleIconClick={ handleIconClick.bind(this, model) } />
        <TreenodeText
          text={ model.text }
          handleTextClick={ handleTextClick.bind(this, model) } />
        { childElements }
      </div>
    );
  }
}

Treenode.propTypes = {
  model: PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    icon: PropTypes.string,
    initialState: PropTypes.shape({
      opened: PropTypes.bool.isRequired
    }),
    children: PropTypes.oneOfType([PropTypes.array, null])
  }),
  handleArrowClick: PropTypes.func,
  handleIconClick: PropTypes.func,
  handleTextClick: PropTypes.func
};

export default Treenode;
