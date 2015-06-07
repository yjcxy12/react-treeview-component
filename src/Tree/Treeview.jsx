var Treeview = React.createClass({
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
      <div>
        {this.props.dataSource.map(function (data, i) {
          return (
            <Treenode data={data} className={className} onTreenodeClick={that.props.onTreenodeClick}>
              {data.children.map(function (node, i) {
                  return iter(node, that.props.onTreenodeClick);
              })}
            </Treenode>
          );
        })}
      </div>
    );
  }
});

function iter(node, treenodeClick) {
  return (<Treenode data={node} onTreenodeClick={treenodeClick}>
    {node.children.map(function (val) {
        return iter(val, treenodeClick);
      })}
  </Treenode>);
}