var Hello = React.createClass({
  buy: function () {
    alert("you bought an iphone!");
  },

  render: function () {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "h2",
        null,
        " iphone - $ 300"
      ),
      React.createElement(
        "button",
        { onClick: this.buy },
        " buy! "
      )
    );
  }
});

React.render(React.createElement(Hello, null), document.getElementById("root"));

