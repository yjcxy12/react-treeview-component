(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// var React = require('react'),
var	index = require('./index.jsx');

React.render(
  index(),
  document.getElementById('tree')
);

},{"./index.jsx":3}],2:[function(require,module,exports){
module.exports = function () {
  'use strict';

  var Treenode = React.createClass({displayName: "Treenode",
    propTypes: {
      'data': React.PropTypes.shape({
        'id': React.PropTypes.string.isRequired,
        'text': React.PropTypes.string.isRequired,
        'icon': React.PropTypes.string,
        'opened': React.PropTypes.bool,
        'disabled': React.PropTypes.bool,
        'selected': React.PropTypes.bool
      })
    },

    getInitialState: function() {
      return {
        'data': this.props.data
      };
    },

    arrowClicked: function() {
      this.state.data.opened = !this.state.data.opened;
      this.setState({
        'data' : this.props.data
      });
    },

    textClicked: function() {
      if (this.props.onTreenodeClick) {
        this.props.onTreenodeClick.apply(this, arguments);
      }
    },

    render: function() {
      var className = 'treenode';
      if (this.props.data.opened) {
        className += ' node-opened';
      }
      else {
        className += ' node-closed';
      }

      return (
        React.createElement("div", React.__spread({},  
          this.props, 
          {className: className}), 
          React.createElement("div", {
            className: "arrow", 
            onClick: this.arrowClicked}, 
              "▾"
          ), 
          React.createElement("i", {className: 'node-icon ' + this.props.data.icon}
          ), 
          React.createElement("div", {
            className: "node-text", 
            onClick: this.textClicked.bind(this, this.props.data.id)}, 
            this.state.data.text
          ), 
          this.props.children
        )
      );
    }
  });

  return TreeNode;
}

},{}],3:[function(require,module,exports){
var TreeView = require('../react-tree.jsx');
var dataSource = [{
  'id': '1',
  'text': 'myNode',
  'icon': 'glyphicon glyphicon-folder-open',
    'opened': false,
    'disabled': false,
    'selected': false,
  'children': [{
      'id': '3',
      'text': 'myNode3',
      'icon': 'glyphicon glyphicon-leaf',
        'opened': false,
        'disabled': false,
        'selected': false,
      'children': []
    }
  ]
},
{
  'id': '2',
  'text': 'myNode2',
  'icon': 'glyphicon glyphicon-folder-open',
    'opened': false,
    'disabled': false,
    'selected': false,
  'children': []
}];

var Sample = React.createClass({displayName: "Sample",
  getInitialState: function () {
      return {
          dataSource: this.props.dataSource  
      };
  },
  handleTreenodeClick: function (node_id) {
    this.state.dataSource.map(function (data) {
      if (data.id !== node_id) {
        return;
      }
      data.text += ' clicked';
    });

    this.setState(this.state.dataSource);
  },

  render: function() {
    var that = this;
    return (
      React.createElement(TreeView, {dataSource: this.props.dataSource, onTreenodeClick: this.handleTreenodeClick})
    );
  }
});

module.exports = Sample;
},{"../react-tree.jsx":4}],4:[function(require,module,exports){
module.exports = function () {
  'use strict';
  var Treenode = require('./Treenode.jsx');
  var TreeView = React.createClass({displayName: "TreeView",
    propTypes: {
      'dataSouce': React.PropTypes.array
    },

    getInitialState: function() {
      return {
        structure: this.props.dataSouce
      };
    },

    render: function () {
      var className = '';
      var that = this;
      return (
        React.createElement("div", null, 
          this.props.dataSource.map(function (data, i) {
            return (
              React.createElement(Treenode, {data: data, className: className, onTreenodeClick: that.props.onTreenodeClick}, 
                data.children.map(function (node, i) {
                    return (React.createElement(Treenode, {
                        data: node, 
                        style: {marginLeft: '20px'}}
                      ));
                  })
                
              )
            );
          })
        )
      );
    }
  });

  return TreeView;
};
},{"./Treenode.jsx":2}]},{},[1]);
