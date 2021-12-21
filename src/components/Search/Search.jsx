import './Search.css'

import {useState, useEffect } from 'react'

const Search = ({cb = Function.prototype}) => {
  const [value, setValue ] = useState()

  const handleKey = (e) => {
    if (e.key === 'Enter') {
      handleSubmit()
    }
  }

  const handleSubmit = () => cb(value)

  const handleInput = (e) => setValue(e.target.value)

  return (<div className='row'>
    <div className="input-field col s12">
      <input type="search" id='search-field' placeholder='search' onKeyDown={handleKey}
      onChange={handleInput} 
      value={ value } />
      <button className='btn' style={{
        position: 'absolute',
        top: 0,
        right: 0,
      }} onClick={handleSubmit}>Send</button>
    </div>

  </div>)

}

export {Search}