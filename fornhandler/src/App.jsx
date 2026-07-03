import React from 'react'
import { useState } from 'react'

const App = () => {
  let [name, setName] = useState('')
  let [email, setEmail] = useState('')
  let [password, setPassword] = useState('')

  return (
    <div className='h-screen  bg-black'>
      <div className='flex flex-col gap-4 p-4  text-white'>
      <input onChange={(e) => setName(e.target.value)} className='w-96 border-2 border-white' type="text" placeholder="Enter name here" />
      <input onChange={(e) => setEmail(e.target.value)} className='w-96 border-2 border-white' type="email" placeholder="Enter email here" />
      <input onChange={(e) => setPassword(e.target.value)} className='w-96 border-2 border-white' type="password" placeholder="Enter password here" />
      <input className='w-96 border-2 border-white'  type="button" value="Submit" />
    </div>
    <div className='flex flex-col gap-4 p-4  text-white'>
      <h1>This is name: {name}</h1>
      <h1>This is email: {email}</h1>
      <h1>This is password: {password}</h1>
    </div>
    
      </div>
  )
}

export default App


