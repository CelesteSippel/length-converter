import React, { useState, useEffect } from 'react'
import HelloWorld from '../components/HelloWorld'

const HomePage = () => {
  const [inches, setInches] = useState(0)

  const [feet, setFeet] = useState(0)

  useEffect(() => {
    const feetTotal = (inches / 12).toFixed(2)
    setFeet(feetTotal)
  }, [inches])

  return (
    <>
      <p> Type a value in the Inches field to convert the value to Feet:</p>
      <p>
        <label>Inches</label>
        <input
          id="inputInches"
          type="number"
          placeholder="inches"
          onChange={e => setInches(e.target.value)}
        ></input>
      </p>
      <p>
        Feet: <span id="outputFeet">{feet}</span>
      </p>
    </>
  )
}

export default HomePage
