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