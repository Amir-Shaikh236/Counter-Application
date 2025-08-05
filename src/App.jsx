import ClassCounter from './Components/classCounter'
import FunctionCounter from './Components/functionCounter'
import './App.css'

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className=" shadow-2xl rounded-3xl p-10 w-full max-w-7xl text-center">
        <h1 className="text-4xl font-bold mb-10 text-white-800">
          Assignment-2 Counter Application
        </h1>

        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          <div className="bg-black rounded-2xl shadow-md p-6 w-72">
            <h2 className="text-xl font-semibold text-indigo-700 mb-4">Class Component</h2>
            <ClassCounter />
          </div>

          <div className="bg-black rounded-2xl shadow-md p-6 w-72">
            <h2 className="text-xl font-semibold text-indigo-700 mb-4">Function Component</h2>
            <FunctionCounter />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
