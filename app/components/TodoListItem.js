var React = require('react');
var TodoListItem = React.createClass({
  removeHandler: function(){
    this.props.onRemove(this.props.text);
  },
  render: function(){
    return <li>{this.props.text} <button onClick={this.removeHandler}>remove</button></li>;
  }
});

module.exports = TodoListItem;
