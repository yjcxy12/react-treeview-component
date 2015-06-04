module.exports = function () {
  'use strict';

  var Treenode = React.createClass({
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
        <div 
          {...this.props}
          className={className}>
          <div
            className='arrow'
            onClick={this.arrowClicked}>
              ▾
          </div>
          <i className={'node-icon ' + this.props.data.icon}>
          </i>
          <div 
            className='node-text'
            onClick={this.textClicked.bind(this, this.props.data.id)}>
            {this.state.data.text}
          </div>
          {this.props.children}
        </div>
      );
    }
  });

  return Treenode;
}