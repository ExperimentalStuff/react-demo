var Hello = React.createClass({
	render: function() {
		return (
                    <h2> This is my first react tryout! let's have some fun. </h2>
                  );
	}
});

React.render(<Hello/>, document.getElementById("root"));
