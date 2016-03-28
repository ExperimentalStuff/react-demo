var Hello = React.createClass({
	render: function () {
		return React.createElement(
			"h2",
			null,
			" This is my first react tryout! let's have some fun. "
		);
	}
});

React.render(React.createElement(Hello, null), document.getElementById("root"));

