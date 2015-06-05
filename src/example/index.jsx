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
      'icon': 'glyphicon glyphicon-folder-open',
      'opened': false,
      'disabled': false,
      'selected': false,
      'children': [
        {
          'id': '5',
          'text': 'myNode5',
          'icon': 'glyphicon glyphicon-leaf',
          'opened': false,
          'disabled': false,
          'selected': false,
          'children': []
        }
      ]
    },
    {
      'id': '4',
      'text': 'myNode4',
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

var Sample = React.createClass({
  getInitialState: function () {
      return {
          dataSource: this.props.dataSource  
      };
  },
  handleTreenodeClick: function (node_id) {
    var data = {
      id: '#',
      children: this.props.dataSource
    };
    iter(data);
    function iter(node) {
      for (var i = 0, arrlen = node.children.length; i < arrlen; i++) {
        var child = node.children[i];
        iter(child);
      }
      if (node_id === node.id) {
        node.text += ' click';
      }
    }

    this.setState(this.state.dataSource);
  },

  render: function() {
    var that = this;
    return (
      <Treeview dataSource={this.props.dataSource} 
        onTreenodeClick={this.handleTreenodeClick}
        ref='treeview'>
      </Treeview>
    );
  }
});

React.render(
  <Sample dataSource={dataSource}/>,
  document.getElementById('tree')
);
