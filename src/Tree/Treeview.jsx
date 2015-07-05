/**
 * Treeview component: Container to hold treenodes. Providing two ways to traverse throught the tree - 
 *                     dfs and bfs
 */
var Treeview = React.createClass({
  propTypes: {
    'dataSource': React.PropTypes.array
  },

  /**
   * Perform depth first search on the tree. Call callback function on each node
   * @param  {Function} Callback function with each node as parameter 
   */
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

  /**
   * Perform breadth first search on the tree. Call callback function on each node
   * @param  {Function} Callback function with each node as parameter 
   */
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
    var self = this;
    return (
      <div>
        {this.props.dataSource.map(function (data, i) {
          return (
            <Treenode data={data} className={className} onTreenodeClick={self.props.onTreenodeClick}>
              {data.children.map(function (node, i) {
                  return iter(node, self.props.onTreenodeClick);
              })}
            </Treenode>
          );
        })}
      </div>
    );
  }
});

/**
 * iterate through datasource and return treenode
 */
function iter(node, treenodeClick) {
  return (<Treenode data={node} onTreenodeClick={treenodeClick}>
    {node.children.map(function (val) {
        return iter(val, treenodeClick);
      })}
  </Treenode>);
}