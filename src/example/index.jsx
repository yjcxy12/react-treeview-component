/**
 * Sample Data
 * @type {Array}
 */
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

  /**
   * Callback function for treenode click event
   * @param  {String} node id
   * @param  {Object} Event object
   * @return {None}
   */
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

  /**
   * Callback function for 'Change Name' button click event
   * @return {None}
   */
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
      <div>
        <button className="btn btn-default" onClick={this.handleButtonClick}>Change Name</button>
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
