import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ClassCounter from './Components/classCounter'
import FunctionCounter from './Components/functionCounter'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="px-2.5 flex flex-col items-center justify-center h-screen">
        <div className='font-bold flex flex-col top-10 items-center justify-center'> 
          <h1 className='text-2xl py-4 h-25 px-2'>Assignment-2 Counter Application</h1>
          <div className='counter-row'>
            <ClassCounter />
            <FunctionCounter />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
