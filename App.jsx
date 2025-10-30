import React from 'react'
import Navigation from './components/Navigation'
import Canvas from './components/Canvas'
import './index.css'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <Navigation />
      
      {/* Main Content Area */}
      <main className="flex-1">
        {/* Canvas Area */}
        <div className="container mx-auto px-4 py-8">
          <Canvas />
        </div>
      </main>
    </div>
  )
}

export default App