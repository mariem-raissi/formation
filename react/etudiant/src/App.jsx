import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Etudiant } from './component/Etudiant'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Etudiant></Etudiant>
    </>
  )
}

export default App
