var Product = React.createClass({
  getInitialState: function(){
    return {qty: 0};
  },      

  buy: function(){
   this.setState({qty: this.state.qty + 1});
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
        <h3> Total Cash: </h3>
      </div>
    );
  }
});

// pass data to component: use html data //
// use data passed in component: {this.props.[data-name]} //
var ProductList = React.createClass({
  showProduct: function(name){
    alert("You selected " + name + "!");
  },

  render: function() {
    return (
        <div>
          <Product name="Iphone" price="300" 
            handleShow={this.showProduct}/>
          <Product name="Zen" price="200"
            handleShow={this.showProduct}/>
          <Product name="Nokia" price="20"
            handleShow={this.showProduct}/>
          <Total/>
        </div>
      );
  }
});


React.render(<ProductList/>, document.getElementById("root"));
