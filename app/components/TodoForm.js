var React = require('react');
var TodoForm = React.createClass({
  render: function(){
    return(
      <form>
        <input type='text'/>
				<input type='submit' value='Add'/>
      </form>
    );
  }
})
module.exports = TodoForm;
