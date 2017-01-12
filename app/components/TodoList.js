var React = require('react');
var TodoListItem = require('./TodoListItem');
var TodoList = React.createClass ({
  removeHandler: function(value){
    this.props.onRemove(value);
  },
  render: function(){
    var createItem = function(itemText, index){
      return (
        <TodoListItem key={index} onRemove={this.removeHandler} text={itemText} />
      );
    };
    var items = this.props.items;
    createItem = createItem.bind(this);
    return <ul>{this.props.items.map(createItem)}</ul>
  }
});

module.exports = TodoList;
