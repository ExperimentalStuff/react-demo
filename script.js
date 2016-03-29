var Product = React.createClass({
  getInitialState: function () {
    return { qty: 0 };
  },

  buy: function () {
    this.setState({ qty: this.state.qty + 1 });
    alert("you bought a phone!");
  },

  render: function () {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "h2",
        null,
        " ",
        this.props.name,
        "- $",
        this.props.price
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

var Total = React.createClass({
  render: function () {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "h3",
        null,
        " Total Cash: "
      )
    );
  }
});

// pass data to component: use html data //
// use data passed in component: {this.props.[data-name]} //
var ProductList = React.createClass({
  render: function () {
    return React.createElement(
      "div",
      null,
      React.createElement(Product, { name: "Iphone", price: "300" }),
      React.createElement(Product, { name: "Zen", price: "200" }),
      React.createElement(Product, { name: "Nokia", price: "20" }),
      React.createElement(Total, null)
    );
  }
});

React.render(React.createElement(ProductList, null), document.getElementById("root"));

