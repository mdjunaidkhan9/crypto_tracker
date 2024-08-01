import React from 'react'
import './Coin.css'
const Coin = ({name,image,symbol,price,volume,pricechanged,marketcap}) => {
    return (
       <>
        <div className='coin-container'>
           
            <div className="coin-row">
                <div className="coin">
                    <img src={image} alt="crypto" />
                    <p >{name}</p>
                    <p className="coin-symbol">
                     {symbol}
                    </p>
                </div>
            <div className="coin-data">
                <p className="coin-price">price : ${price}</p>
                <p className="coin-volume">market-cap :${volume.toLocaleString()}</p>
                {pricechanged<0 ? (
                    <p className='coin-percent red'>change:<br/>{pricechanged.toFixed(2)}%</p>
                ):( <p className='coin-percent green'>{pricechanged.toFixed(2)}%</p>)}
                <p className='coin-marketcap'>
                volume :<br/>${marketcap}
                </p>
            </div>
            </div>

        </div>
        </>
    )
}

export default Coin
