import React, { useState, useEffect } from 'react'
import './App.css'
import {getAllQuotes} from '../../apiCalls'
import Quotes from '../Quotes/Quotes'


const App = () => {
  
  const [quotes, setQuotes] = useState([])
  const [error, setError] = useState('')
  
  const getQuotes = async () => {
    const error = 'An Error Has occurred'
    try {
      const quotes = await getAllQuotes()
      setQuotes(quotes)
    } catch(error) {
      setError(error)
    }
  }

  useEffect(() => {
    getQuotes()
  }, [])

  return (
    <div className="App">
        <h1>Seinfeld Quotes</h1>
        <h2>Let's Play</h2>
        {/* <Quotes /> */}
    </div>
  )
}

export default App
