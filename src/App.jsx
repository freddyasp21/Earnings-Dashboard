import React from 'react'
import Sidebar from './assets/components/Sidebar'

function App() {
  return (
    <div className='grid lg:grid-cols-4 xl:grid-cols-6 min-h-screen'>
      <Sidebar/>
      <main className="col-span-3 xl:col-span-5">

      </main>
    </div>  
  )
}

export default App