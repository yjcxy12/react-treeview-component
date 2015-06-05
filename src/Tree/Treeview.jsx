var Treeview = React.createClass({
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