import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Members from './components/Members'
import Faith from './components/Faith'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <div className='flex flex-row gap-5'>
         <Members  members="Total members" score={2344} color="bg-red-300"/>
         <Members  members="Total posts" score={2222} color="bg-blue-300"/>
          <Members  members="Total comments" score={1000} color="bg-red-300"/>
           <Members  members="Server loads" score={32.5} color="bg-red-300"/>
   </div>
   <div>
     <Faith/>
   </div>
    </>
  )
}

export default App
