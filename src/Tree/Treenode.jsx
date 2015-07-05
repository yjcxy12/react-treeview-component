/**
 * Treenode component, storing information for each node
 * @data: {
 *    @id: {String} Unique id of the node
 *    @text: {String} Displaying text
 *    @icon: {String} Css class for node icon. Icons will be displayed left to the node text
 *    @opened: 
 *    @disabled:
 *    @selected:
 * }
 */
var Treenode = React.createClass({
  propTypes: {
    'data': React.PropTypes.shape({
      'id': React.PropTypes.string.isRequired,
      'text': React.PropTypes.string.isRequired,
      'icon': React.PropTypes.string,
      'opened': React.PropTypes.bool,
      'disabled': React.PropTypes.bool,
      'selected': React.PropTypes.bool,
      'children': React.PropTypes.array
    })
  },

  /**
   * When arrow is clicked on parent treenode, set opened state on the node and display child nodes
   */
  arrowClicked: function() {
    this.state.data.opened = !this.state.data.opened;
    this.setState({
      'data' : this.props.data
    });
  },

  /**
   * bind onTreenodeClick when treenode text is clicked
   */
  textClicked: function() {
    if (this.props.onTreenodeClick) {
      this.props.onTreenodeClick.apply(this, arguments);
    }
  },

  render: function() {
    var className = 'treenode';
    var nodeTextClass = 'node-text';
    if (this.props.data.opened) {
      className += ' node-opened';
    }
    else {
      className += ' node-closed';
    }
    if (this.props.data.selected) {
      nodeTextClass += ' node-selected';
    }

    return (
      <div {...this.props} className={className}>
        <div className='arrow' onClick={this.arrowClicked}>
            ▾
        </div>
        <i className={'node-icon ' + this.props.data.icon}>
        </i>
        <div className={nodeTextClass} onClick={this.textClicked.bind(this, this.props.data.id)}>
          {this.state.data.text}
        </div>
        {this.props.children}
      </div>
    );
  }
});