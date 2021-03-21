import React, { useState, useEffect } from 'react'
import './App.css'
import {getAllQuotes} from '../../apiCalls'


function App() {
  const [quotes, setQuotes] = useState([])
  const [error, setError] = useState('')
  
  const getQuotes = async () => {
    const error = 'An Error Has Occured'
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
    </div>
  )
}

export default App
