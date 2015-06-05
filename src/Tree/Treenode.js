var Treenode = React.createClass({displayName: "Treenode",
  propTypes: {
    'data': React.PropTypes.shape({
      'id': React.PropTypes.string.isRequired,
      'text': React.PropTypes.string.isRequired,
      'icon': React.PropTypes.string,
      'opened': React.PropTypes.bool,
      'disabled': React.PropTypes.bool,
      'selected': React.PropTypes.bool
    })
  },

  getInitialState: function() {
    return {
      'data': this.props.data
    };
  },

  arrowClicked: function() {
    this.state.data.opened = !this.state.data.opened;
    this.setState({
      'data' : this.props.data
    });
  },

  textClicked: function() {
    if (this.props.onTreenodeClick) {
      this.props.onTreenodeClick.apply(this, arguments);
    }
  },

  render: function() {
    var className = 'treenode';
    if (this.props.data.opened) {
      className += ' node-opened';
    }
    else {
      className += ' node-closed';
    }

    return (
      React.createElement("div", React.__spread({},  
        this.props, 
        {className: className}), 
        React.createElement("div", {
          className: "arrow", 
          onClick: this.arrowClicked}, 
            "▾"
        ), 
        React.createElement("i", {className: 'node-icon ' + this.props.data.icon}
        ), 
        React.createElement("div", {
          className: "node-text", 
          onClick: this.textClicked.bind(this, this.props.data.id)}, 
          this.state.data.text
        ), 
        this.props.children
      )
    );
  }
});