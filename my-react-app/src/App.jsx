import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Add, Salut2, Teststyle } from './components/Add'
import { Exemple2,Getage,PartyEvent,Testapp, Testconnect, Testconnect2 } from './components/Exemple2'
import GetName from './components/Exemple2'
import { Form } from './components/Form'
import { Context } from './components/Context'
function App() {
 const theme="dark";

  return (
    <>
    <Context.provider value={theme}/> 
    <Form></Form>
    <PartyEvent></PartyEvent>
    <Testconnect2></Testconnect2>
    <Testconnect></Testconnect>
      <div className='div1'>
        <p>test test test</p>
      </div>
      <GetName></GetName>
      <Getage></Getage>
      <Exemple2></Exemple2>
      <Testapp></Testapp>
      <Add></Add>
      <Salut2></Salut2>
      <Teststyle></Teststyle>
    </>
  )
}

export default App
