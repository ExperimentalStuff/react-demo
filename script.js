var Hello = React.createClass({
  getInitialState: function () {
    return { qty: 0 };
  },

  buy: function () {
    this.setState({ qty: this.state.qty + 1 });
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
      ),
      React.createElement(
        "h3",
        null,
        " Qty: ",
        this.state.qty,
        " item(s)"
      )
    );
  }
});

React.render(React.createElement(Hello, null), document.getElementById("root"));

