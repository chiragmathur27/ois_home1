import React from 'react'
import "./ticker.css"
import "../../App.js"
function ticker(props) {
  console.log(props.whatwedo);
  return (
    <div className='ticker-body'>
        <div className='left'>
            <div className='whatwedo'>{props.whatwedo}</div>
            <div className='rectangle-9'></div>
        </div>
        <div className='right'>
            <img src={props.ticker} alt="ticker"></img>
        </div>
    </div>
  )
}

export default ticker