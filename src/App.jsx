import React from 'react'
import Sidebar from './assets/components/Sidebar'
import Header from './assets/components/Header'

function App() {
  return (
    <div className='grid lg:grid-cols-4 xl:grid-cols-6 min-h-screen'>
      <Sidebar/>
      <main className="bg-gray-100 p-8 col-span-3 xl:col-span-5">
        <Header/>
      </main>
    </div>  
  )
}

export default App