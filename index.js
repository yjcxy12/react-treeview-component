var dataSource = [{
  "id": "1",
  "text": "myNode",
  "icon": "glyphicon glyphicon-folder-open",
  "opened": false,
  "selected": false,
  "children": [{
      "id": "3",
      "text": "myNode3",
      "icon": "glyphicon glyphicon-folder-open",
      "opened": false,
      "selected": false,
      "children": [
        {
          "id": "5",
          "text": "myNode5",
          "icon": "glyphicon glyphicon-leaf",
          "opened": false,
          "selected": false,
          "children": []
        }
      ]
    },
    {
      "id": "4",
      "text": "myNode4",
      "icon": "glyphicon glyphicon-leaf",
      "opened": false,
      "selected": false,
      "children": []
    }
  ]
},
{
  "id": "2",
  "text": "myNode2",
  "icon": "glyphicon glyphicon-folder-open",
  "opened": false,
  "selected": false,
  "children": []
}];

var Sample = React.createClass({displayName: "Sample",

  handleTreenodeClick: function (node_id, event) {
    this.refs.treeview.dfs(function (node) {
      if (node.id === node_id) {
        node.selected = !node.selected;
      }
      else {
        if (!event.ctrlKey) {
          node.selected = false;
        }
      }
    });

    this.forceUpdate();
  },

  handleButtonClick: function () {
    this.refs.treeview.bfs(function (node) {
      if (node.selected) {
        node.text += ' changed';
      }
    });

    this.forceUpdate();
  },

  render: function() {
    var that = this;
    return (
      React.createElement("div", null, 
        React.createElement("button", {className: "btn btn-default", onClick: this.handleButtonClick}, "Change Name"), 
        React.createElement(Treeview, {dataSource: this.props.dataSource, 
          onTreenodeClick: this.handleTreenodeClick, 
          ref: "treeview"}
        )
      )
    );
  }
});

React.render(
  React.createElement(Sample, {dataSource: dataSource}),
  document.getElementById('tree')
);
