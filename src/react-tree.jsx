module.exports = function () {
  'use strict';
  var Treenode = require('./Treenode.js')();
  var TreeView = React.createClass({
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
        <div>
          {this.props.dataSource.map(function (data, i) {
            return (
              <Treenode data={data} className={className} onTreenodeClick={that.props.onTreenodeClick}>
                {data.children.map(function (node, i) {
                    return (<Treenode 
                        data={node}  
                        style={{marginLeft: '20px'}}>
                      </Treenode>);
                  })
                }
              </Treenode>
            );
          })}
        </div>
      );
    }
  });

  return TreeView;
};
