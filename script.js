var Product = React.createClass({
  getInitialState: function () {
    return { qty: 0 };
  },

  buy: function () {
    this.setState({ qty: this.state.qty + 1 });
    this.props.handleTotal(this.props.price);
    alert("you bought a phone!");
  },
  show: function () {
    this.props.handleShow(this.props.name);
  },

  render: function () {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'h2',
        null,
        ' ',
        this.props.name,
        '- $',
        this.props.price
      ),
      React.createElement(
        'button',
        { onClick: this.buy },
        ' buy! '
      ),
      React.createElement(
        'button',
        { onClick: this.show },
        ' show '
      ),
      React.createElement(
        'h3',
        null,
        ' Qty: ',
        this.state.qty,
        ' item(s)'
      )
    );
  }
});

var Total = React.createClass({
  render: function () {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'h3',
        null,
        ' Total Cash: $',
        this.props.total,
        ' '
      )
    );
  }
});

var ProdictForm = React.createClass({
  submit: function (e) {
    e.preventDefault();
    alert('name: ' + this.refs.name.value + ' - $' + this.refs.price.value);

    this.refs.name.value = '';
    this.refs.price.value = '';
  },
  render: function () {
    return React.createElement(
      'form',
      null,
      React.createElement('input', { type: 'text', placeholder: 'Product Name', ref: 'name' }),
      ' -',
      React.createElement('input', { type: 'text', placeholder: 'Product Price', ref: 'price' }),
      React.createElement('br', null),
      React.createElement('br', null),
      React.createElement(
        'button',
        { onClick: this.submit },
        'Create Product'
      ),
      React.createElement('hr', null)
    );
  }
});

// pass data to component: use html data //
// use data passed in component: {this.props.[data-name]} //
var ProductList = React.createClass({
  // add a state of total, initialized to 0//
  getInitialState: function () {
    return {
      total: 0,
      productList: [{ name: "Android", price: 200 }, { name: "Iphone", price: 300 }, { name: "Nokia", price: 20 }]
    };
  },
  calculateTotal: function (price) {
    this.setState({ total: this.state.total + price });
  },

  showProduct: function (name) {
    alert("You selected " + name + "!");
  },

  render: function () {
    var component = this;
    var products = this.state.productList.map(function (product) {
      return React.createElement(Product, { name: product.name, price: product.price,
        handleShow: component.showProduct,
        handleTotal: component.calculateTotal });
    });

    return React.createElement(
      'div',
      null,
      React.createElement(ProdictForm, null),
      products,
      React.createElement(Total, { total: this.state.total })
    );
  }
});

React.render(React.createElement(ProductList, null), document.getElementById("root"));

