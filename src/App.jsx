import { useState } from 'react'
import './App.css'
import {Card} from './components/Card.jsx'


function App() {


  return (
    <>
      <Card 
        image="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=600&q=80"
        title="Library"
        description="A quiet space to study, read and research."
        linkText="See more"
        linkUrl="#library-route"
      />
      
              
    </>
  )
}

export default App
