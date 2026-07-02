import { useState } from 'react'
import Badge from './components/Badge/Badge.jsx'
import Banner from './components/Banner/Banner.jsx'
import './App.css'

function App() {

  return (
    <>
      <Banner isMultiline={true} variant={'error'} />
    </>
  )
}

export default App