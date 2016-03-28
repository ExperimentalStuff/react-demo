var Product = React.createClass({
  getInitialState: function(){
    return {qty: 0};
  },      

  buy: function(){
   this.setState({qty: this.state.qty + 1});
   alert("you bought an iphone!");
  },      

  render: function() {
    return (
      <div>
        <h2> iphone - $ 300</h2>
        <button onClick={this.buy}> buy! </button>
        <h3> Qty: {this.state.qty} item(s)</h3>
      </div>
      );
  }
});

var Total = React.createClass({
  render: function() {
    return (
      <div>
        <h3> Total Cash: </h3>
      </div>
    );
  }
});

var ProductList = React.createClass({
  render: function() {
    return (
        <div>
          <Product/>
          <Product/>
          <Product/>
          <Total/>
        </div>
      );
  }
});


React.render(<ProductList/>, document.getElementById("root"));
