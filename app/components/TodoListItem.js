var React = require('react');
var TodoListItem = React.createClass({
  removeHandler: function(){
    this.props.onRemove(this.props.children);
  },
  render: function(){
    console.log("inside of todo item "+ this.props);
    return <li>{this.props.children} <button onClick={this.removeHandler}>remove</button></li>;
  }
});
module.exports = TodoListItem;
