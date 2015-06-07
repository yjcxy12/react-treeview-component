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
    var nodeTextClass = 'node-text';
    if (this.props.data.opened) {
      className += ' node-opened';
    }
    else {
      className += ' node-closed';
    }
    if (this.props.data.selected) {
      nodeTextClass += ' node-selected';
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
          className: nodeTextClass, 
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

  dfs: function (callback) {
    var data = {
      id: '#',
      children: this.props.dataSource
    };

    helper(data);

    function helper(node) {
      var res = false;
      node.children.map(function (child) {
        helper(child);
      });
      callback(node);
    }
  },

  bfs: function (callback) {
    var data = {
      id: '#',
      children: this.props.dataSource
    };

    helper(data);

    function helper(node) {
      var queue = [];
      var next = node;
      while (next) {
        callback(next);
        next.children.map(function (child) {
          queue.push(child);
        });
        next = queue.shift();
      }
    }
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