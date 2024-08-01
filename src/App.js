import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Coin from './Coin';

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false', { crossDomain: true })
      .then(res => {
        setCoins(res.data)
        console.log(res.data);
      }).catch((error) => {
        console.log(error);
      })
  }, []);

  const handlechange = e => {
    setSearch(e.target.value);
  }
  const filtercoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  )
  return (

    <div className="coin-app">
      <div className='coin-search'>
        <h1 className='coin-text'>
        cryptocurrency tracker
        </h1>
        <form>
          <input type='text' placeholder='search coin' className='coin-input' onChange={handlechange} />
        </form>
        
      </div>
      <div className='coin-list'>
                <table>
                    {/* <tr>Image</tr>
                    <tr>Name</tr>
                    <tr>Symbol</tr>
                    <tr>current</tr>
                    <tr>total</tr>
                    <tr>pe</tr> */}
                </table>
            </div>
      {filtercoins.map(coin => {
        return (
          <Coin
            key={coin.id}
            name={coin.name}
            price={coin.current_price}
            symbol={coin.symbol}
            marketcap={coin.total_volume}
            volume={coin.market_cap}
            image={coin.image}
            pricechanged={coin.market_cap_change_percentage_24h}


          />
        );
      })}
    </div>
  );
}

export default App;
