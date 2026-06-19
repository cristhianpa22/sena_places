import { useState } from 'react'
import './App.css'
import {Card} from './components/Card.jsx'
import { Footer } from './components/Footer.jsx'

function App() {


  return (
  <div>
  <div className="flex justify-center items-center min-h-screen bg-gray-50 p-4">
      <Card 
        image="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=600&q=80"
        title="Library"
        description="A quiet space to study, read and research."
        linkText="See more"
        linkUrl="#library-route"
      />

     
    </div>
     <Footer />
</div>


      
      
  )
}

export default App
