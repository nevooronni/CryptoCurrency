import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
//import react-number-format
var NumberFormat = require('react-number-format');

class App extends Component {
  //pass in props for our properties constructor initialized object variables/properties
  constructor(props) {
    super(props);

    this.state = {
      //going to hold the response from the api
      cryptos: []
    };
  }

  componentDidMount() {
    //url for api endpoint
    axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,IOT,TRX,XRP,BNB,LTC,BCH,EOS,EOS,DASH,QTUM&tsyms=USD,EUT,BTC')
      //response arrow function
      .then(res => {
        //const like var 
        const cryptos = res.data;
        console.log(cryptos);
        this.setState({cryptos: cryptos});
      })
  }

  render() {
    return (
      <div className="App">
        <h1 id="heading">CryptoCurrency Compare</h1>
        {Object.keys(this.state.cryptos).map((key) => (
          <div id="crypto-container">
            <span className="left">{key}</span>
            <span className="right"><NumberFormat value={this.state.cryptos[key].USD} displayType={'text'} decimalPrecision={2} thousandSeperator={true} prefix={'$'} /></span>
          </div>

          ))}
      </div>
    );
  }
}

export default App;
