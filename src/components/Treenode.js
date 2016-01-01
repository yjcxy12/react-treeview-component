import React, { Component, PropTypes } from 'react';
import TreenodeArrow from './TreenodeArrow';
import TreenodeIcon from './TreenodeIcon';
import TreenodeText from './TreenodeText';
import TreenodeStore from '../stores/TreenodeStore';
import {
  defaultHandleArrowClick,
  defaultHandleIconClick,
  defaultHandleTextClick
} from '../actions/defaultTreenodeActions';

class Treenode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nodeModel: props.initialNodeModel
    };
  }

  componentDidMount() {
    TreenodeStore.on('node_changed_' + this.props.id, this.handleNodeChanged.bind(this));
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state !== nextState ||
      this.props.id !== nextProps.id ||
      this.props.hasChild !== nextProps.hasChild;
  }

  componentWillUnmount() {
    TreenodeStore.off('node_changed_' + this.props.id);
  }

  handleNodeChanged(nodeModel) {
    this.setState({
      nodeModel
    });
  }

  render() {
    const {
      id,
      hasChild,
      children,
      handleArrowClick,
      handleIconClick,
      handleTextClick
    } = this.props;
    const { nodeModel } = this.state;
    const finalHandleArrowClick = () => {
      if (handleArrowClick) {
        handleArrowClick(id, nodeModel);
      }
      defaultHandleArrowClick(id, nodeModel);
    };
    const finalHandleIconClick = () => {
      if (handleIconClick) {
        handleIconClick(id, nodeModel);
      }
      defaultHandleIconClick(id, nodeModel);
    };
    const finalHandleTextClick = () => {
      if (handleTextClick) {
        handleTextClick(id, nodeModel);
      }
      defaultHandleTextClick(id, nodeModel);
    };

    return (
      <div
        className={ `treenode-node treenode-node--${id}` }
        id={ `treenode-node--${id}` }>
        <TreenodeArrow
          opened={ nodeModel.initialState.opened }
          hasChild={ hasChild }
          handleArrowClick={ finalHandleArrowClick.bind(this) } />
        <TreenodeIcon
          icon={ nodeModel.icon }
          handleIconClick={ finalHandleIconClick.bind(this) } />
        <TreenodeText
          text={ nodeModel.text }
          handleTextClick={ finalHandleTextClick.bind(this) } />
        <div className={ nodeModel.initialState.opened ? 'show' : 'hidden' }>
          { children }
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
  hasChild: PropTypes.bool.isRequired,
  initialNodeModel: PropTypes.shape({
    text: PropTypes.string.isRequired,
    icon: PropTypes.string,
    initialState: PropTypes.shape({
      opened: PropTypes.bool.isRequired
    }),
    children: PropTypes.oneOfType([PropTypes.array, null])
  }).isRequired,
  handleArrowClick: PropTypes.func,
  handleIconClick: PropTypes.func,
  handleTextClick: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element,
    null
  ])
};

export default Treenode;
