import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Treeview } from '../../../lib';

class App extends Component {

  render() {
    const { model, structure } = this.props;

    return (
      <div>
        <Treeview
          model={ model }
          structure={ structure } />
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
