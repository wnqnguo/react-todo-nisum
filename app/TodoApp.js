var React = require('react');
var ReactDOM = require('react-dom');
var TodoBanner = require('./components/TodoBanner');
var TodoList = require('./components/TodoList');
var TodoForm = require('./components/TodoForm');

var items = ['Todo item #1', 'Todo item #2']

var TodoApp = React.createClass ({
  render: function(){
    return (
      <div>
        <TodoBanner/>
        <TodoList items={items}/>
        <TodoForm/>
      </div>
    );
  }

});

ReactDOM.render(
  <TodoApp />,
  document.getElementById('app')
)
