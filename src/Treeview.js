var Treenode = require('./Treenode.js');
var Treeview = React.createClass({displayName: "Treeview",
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

// return Treeview;