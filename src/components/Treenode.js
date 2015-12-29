import React, { Component, PropTypes } from 'react';
import TreenodeArrow from './TreenodeArrow';
import TreenodeIcon from './TreenodeIcon';
import TreenodeText from './TreenodeText';
import {
  defaultHandleArrowClick,
  defaultHandleIconClick,
  defaultHandleTextClick
} from '../actions/defaultTreenodeActions';

class Treenode extends Component {
  constructor(props) {
    super(props);
    this.state = props.nodeModel.initialState;
  }

  render() {
    const {
      id,
      model,
      childrenNodes,
      nodeModel,
      handleArrowClick,
      handleIconClick,
      handleTextClick
    } = this.props;
    const finalHandleArrowClick = () => {
      if (handleArrowClick) {
        handleArrowClick(id, nodeModel);
      }
      defaultHandleArrowClick(this);
    };
    const finalHandleIconClick = () => {
      if (handleIconClick) {
        handleIconClick(id, nodeModel);
      }
      defaultHandleIconClick(this);
    };
    const finalHandleTextClick = () => {
      if (handleTextClick) {
        handleTextClick(id, nodeModel);
      }
      defaultHandleTextClick(this);
    };

    const childElements = childrenNodes.length > 0 ?
      childrenNodes.map((child) => {
        return (
          <Treenode
            id={ child.id }
            key={ child.id }
            model={ model }
            childrenNodes={ child.children }
            nodeModel={ model[child.id] }
            handleArrowClick={ handleArrowClick }
            handleIconClick={ handleIconClick }
            handleTextClick={ handleTextClick } />
        );
      }) : null;

    return (
      <div className="treenode-node">
        <TreenodeArrow
          opened={ this.state.opened }
          hasChild={ childrenNodes.length > 0 }
          handleArrowClick={ finalHandleArrowClick.bind(this) } />
        <TreenodeIcon
          icon={ nodeModel.icon }
          handleIconClick={ finalHandleIconClick.bind(this) } />
        <TreenodeText
          text={ nodeModel.text }
          handleTextClick={ finalHandleTextClick.bind(this) } />
        <div className={ this.state.opened ? 'show' : 'hidden' }>
          { childElements }
        </div>
      </div>
    );
  }
}

Treenode.propTypes = {
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  model: PropTypes.object.isRequired,
  childrenNodes: PropTypes.array.isRequired,
  nodeModel: PropTypes.shape({
    text: PropTypes.string.isRequired,
    icon: PropTypes.string,
    initialState: PropTypes.shape({
      opened: PropTypes.bool.isRequired
    }),
    children: PropTypes.oneOfType([PropTypes.array, null])
  }).isRequired,
  handleArrowClick: PropTypes.func,
  handleIconClick: PropTypes.func,
  handleTextClick: PropTypes.func
};

export default Treenode;
