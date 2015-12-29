import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Treeview } from '../../../lib';
import { changeNodeName } from '../actions';

class App extends Component {
  handleTextClick(id, treenode) {
    this.props.dispatch(changeNodeName(id, treenode.text + ' changed'));
  }

  render() {
    const { model, structure } = this.props;

    return (
      <div>
        <Treeview
          model={ model }
          structure={ structure }
          handleTextClick={ this.handleTextClick.bind(this) } />
      </div>
    );
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  model: PropTypes.object.isRequired,
  structure: PropTypes.object.isRequired
};

function select(state) {
  return {
    model: state.treeviewModel.model,
    structure: state.treeviewModel.structure
  };
}

export default connect(select)(App);
