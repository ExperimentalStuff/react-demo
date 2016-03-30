var Product = React.createClass({
  getInitialState: function(){
    return {qty: 0};
  },      

  buy: function(){
   this.setState({qty: this.state.qty + 1});
   this.props.handleTotal(this.props.price);
   alert("you bought a phone!");
  },      
  show: function(){
    this.props.handleShow(this.props.name);
  },

  render: function() {
    return (
      <div>
        <h2> {this.props.name}- ${this.props.price}</h2>
        <button onClick={this.buy}> buy! </button>
        <button onClick={this.show}> show </button>
        <h3> Qty: {this.state.qty} item(s)</h3>
      </div>
      );
  }
});

var Total = React.createClass({
  render: function() {
    return (
      <div>
        <h3> Total Cash: ${this.props.total} </h3>
      </div>
    );
  }
});

// pass data to component: use html data //
// use data passed in component: {this.props.[data-name]} //
var ProductList = React.createClass({
  // add a state of total, initialized to 0//
  getInitialState: function(){
    return {
      total: 0,
      productList: [
        {name: "Android", price: 200},
        {name: "Iphone", price: 300},
        {name: "Nokia", price: 20}
      ]
    };
  },
  calculateTotal: function(price){
    this.setState({total: this.state.total + price});
  },

  showProduct: function(name){
    alert("You selected " + name + "!");
  },

  render: function() {
    var component = this;
    var products = this.state.productList.map(function(product){
      return (
        <Product name={product.name} price={product.price} 
            handleShow={component.showProduct}
            handleTotal={component.calculateTotal}/>
        );
    });

    return (
        <div>
          {products}
          <Total total={this.state.total}/>
        </div>
      );
  }
});


React.render(<ProductList/>, document.getElementById("root"));
