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

var Sample = React.createClass({

  handleTreenodeClick: function (node_id, event) {
    var data = {
      id: '#',
      children: this.props.dataSource
    };

    iter(data, event.ctrlKey);
    
    this.forceUpdate();

    function iter(node, ctrl) {
      node.children.map(function (child) {
        iter(child, ctrl);
      });
      if (node_id === node.id) {
        node.selected = !node.selected;
      }
      else {
        if (!ctrl) {
          node.selected = false;
        }
      }
    }
  },

  render: function() {
    var that = this;
    return (
      <div>
        <button className="btn btn-default">Change Name</button>
        <Treeview dataSource={this.props.dataSource}
          onTreenodeClick={this.handleTreenodeClick}
          ref='treeview'>
        </Treeview>
      </div>
    );
  }
});

React.render(
  <Sample dataSource={dataSource}/>,
  document.getElementById('tree')
);
