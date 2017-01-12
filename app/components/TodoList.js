var React = require('react');
var TodoListItem = require('./TodoListItem');

var TodoList = React.createClass ({
  getItemElements(items) {
    return items.map((itemText, index) => {
      return (
        <TodoListItem key={index} text={itemText} onRemove={() => {}}/>
      );
    })
  },
  render: function(){
    return <ul>{this.getItemElements(this.props.items)}</ul>
  }
});

module.exports = TodoList;
