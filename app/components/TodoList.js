var React = require('react');
var TodoListItem = require('./TodoListItem');
var TodoList = React.createClass ({
  removeHandler: function(value){
    console.log("remove");
    this.props.onRemove(value);
  },
  render: function(){
    var createItem = function(itemText){
      console.log("itemText is "+itemText);
      return (
        <TodoListItem onRemove={this.removeHandler}>{itemText}</TodoListItem>
      );
    };
    var items = this.props.items;
    createItem = createItem.bind(this);
    return <ul>{this.props.items.map(createItem)}</ul>
  }
});
module.exports = TodoList;
