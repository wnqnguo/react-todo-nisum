var React = require('react');
var TodoListItem = React.createClass({
  render: function(){
    return <li>{this.props.text} <button onClick={() => {this.props.onRemove(this.props.text)}}>remove</button></li>;
  }
});

module.exports = TodoListItem;
