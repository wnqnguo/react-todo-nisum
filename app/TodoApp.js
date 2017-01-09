var React = require('react');
var ReactDOM = require('react-dom');
var TodoBanner = require('./components/TodoBanner');
var TodoList = require('./components/TodoList');
var TodoForm = require('./components/TodoForm');

var TodoApp = React.createClass ({
  getInitialState: function(){
    return {items: ['Todo item #1', 'Todo item #2']};
  },
  addItems: function(newItem){
    var allItems = this.state.items.concat([newItem]);
    this.setState({items: allItems});
  },
  removeItems: function(value){
    var allItems = this.state.items.filter(function(element){
      return element!==value;
    });
    console.log("all items "+ allItems);
    console.log("removing items" + value);
    this.setState({items: allItems});
  },
  render: function(){
    return (
      <div>
        <TodoBanner/>
        <TodoList items={this.state.items} onRemove={this.removeItems}/>
        <TodoForm onFormSubmit={this.addItems}/>
      </div>
    );
  }

});

ReactDOM.render(
  <TodoApp />,
  document.getElementById('app')
)
