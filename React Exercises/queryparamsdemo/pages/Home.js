import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'


export default function Home() {
    const [userName, setUserName] = useState('')
    const changeHandler=(e)=>{
        setUserName({[e.target.name] : e.target.value })
    }
    
  return (
    <div>
        Name: <input type='text' name='userName' onChange={changeHandler}/><br/>
        <button><Link to='/Profile' >Sunmit</Link></button>
    </div>
  )
}
