(function (root, factory) {
  if(typeof define === "function" && define.amd) {
    define(function () {
      return factory();
    });
  } else if(typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    root.Treeview = factory();
  }
}(this, function() {
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
var Treeview = React.createClass({displayName: "Treeview",
  propTypes: {
    'dataSource': React.PropTypes.array
  },

  getNode: function (id) {
    return this.props.dataSource.filter(function (node) {
      return id === node.id;
    });
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
                  return iter(node, that.props.onTreenodeClick);
              })
            )
          );
        })
      )
    );
  }
});

function iter(node, treenodeClick) {
  return (React.createElement(Treenode, {data: node, onTreenodeClick: treenodeClick}, 
    node.children.map(function (val) {
        return iter(val, treenodeClick);
      })
  ));
}
return Treeview;
}));