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

var Sample = React.createClass({displayName: "Sample",
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
      React.createElement(Treeview, {dataSource: this.props.dataSource, 
        onTreenodeClick: this.handleTreenodeClick, 
        ref: treeview}
      )
    );
  }
});

React.render(
  React.createElement(Sample, {dataSource: dataSource}),
  document.getElementById('tree')
);
