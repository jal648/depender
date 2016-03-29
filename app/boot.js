console.log(
  "%c...loading...",
  "font:italic 20px serif;text-shadow:2px 2px 4px #888; color:#aaaaaa;");


console.log(`1+1`);

var React = require('react')
var ReactDOM = require('react-dom')
var moment = require('moment')

console.log(moment().subtract(6, 'days').calendar())
var FriendsContainer = React.createClass({
  render: function(){
    var name = 'Tyler McGinnis'
    var friends = ['Ean Platter', 'Murphy Randall', 'Merrick Christensen']
    return (
      <div>
        <h3> Name: {name} </h3>
        <ShowList names={friends} />
      </div>
    )
  }
});

var ShowList = React.createClass({
  render: function(){
    var listItems = this.props.names.map(function(friend){
      return <li key={friend} > {friend} </li>;
    });
    return (
      <div>
        <h3> -- Friends -- </h3>
        <ul>
          {listItems}
        </ul>
      </div>
    )
  }
});

var HelloWorld = React.createClass({
  render: function(){
    return (
      <div>
        <h1>Hello World!</h1>
        <FriendsContainer />
      </div>
    )
  }
});
ReactDOM.render(<HelloWorld />, document.getElementById('main'));