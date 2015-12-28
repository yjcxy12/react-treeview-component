import React, { Component, PropTypes } from 'react';
import Treenode from './Treenode.js';
import {
  defaultHandleArrowClick,
  defaultHandleIconClick,
  defaultHandleTextClick
} from '../actions/defaultTreenodeActions';

class Treeview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      model: props.initialModel
    };
  }

  render() {
    const { model } = this.state;
    const { handleArrowClick, handleIconClick, handleTextClick } = this.props;
    const finalHandleArrowClick = handleArrowClick || defaultHandleArrowClick.bind(null, this);
    const finalHandleIconClick = handleIconClick || defaultHandleIconClick.bind(null, this);
    const finalHandleTextClick = handleTextClick || defaultHandleTextClick.bind(null, this);
    const treenodeArr = model.map((element) => {
      return (
        <Treenode
          model={ element }
          handleArrowClick={ finalHandleArrowClick.bind(this) }
          handleTextClick={ finalHandleTextClick.bind(this) }
          handleIconClick={ finalHandleIconClick.bind(this) } />
      );
    });

    return (<div>{ treenodeArr }</div>);
  }
}

Treeview.propTypes = {
  initialModel: PropTypes.array.isRequired,
  handleArrowClick: PropTypes.func,
  handleIconClick: PropTypes.func,
  handleTextClick: PropTypes.func
};

export default Treeview;
