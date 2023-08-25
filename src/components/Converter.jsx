import React from 'react'

export default function Converter() {
  return (
    <div className='converter'>
        <div className='converter__container'>
            <div className='converter__section'>
              <div className='converter__option'>
                <h1 className='converter__title'>Convert from</h1>
                <select className='converter__select'>
                  <option>BTC</option>
                  <option>ETH</option>
                  <option>LTC</option>
                </select>
              </div>
              <input className='converter__input' type="text"/>
            </div>

            <div className='converter__section'>
              <div className='converter__option'>
                <h1 className='converter__title'>to</h1>
                <select className='converter__select'>
                  <option>BTC</option>
                  <option>ETH</option>
                  <option>LTC</option>
                </select>
              </div>
              <input className='converter__input' type="text" />
            </div>
        </div>
        <button className='converter__button'>CONVERT</button>
    </div>
  )
}
