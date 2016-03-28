var Hello = React.createClass({
        buy: function(){
               alert("you bought an iphone!");
             },      

	render: function() {
		return (
                    <div>
                      <h2> iphone - $ 300</h2>
                      <button onClick={this.buy}> buy! </button>
                    </div>
                  );
	}
});

React.render(<Hello/>, document.getElementById("root"));
