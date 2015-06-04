var TreeView = require('../react-tree.js')();
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

var Sample = React.createClass({
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
      <TreeView dataSource={this.props.dataSource} onTreenodeClick={this.handleTreenodeClick}></TreeView>
    );
  }
});

React.render(
  <Sample dataSource={dataSource}/>,
  document.getElementById('tree')
);
