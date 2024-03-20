import React, {  useState } from 'react'
import "./App.scss"

export default function App() {
  const [users, setUsers] = useState([])
  // const [user, setUser] = useState({
  //   id: "",
  //   name: "",
  //   email: ""
  // })
  
  const handleSubmit = (e)=>{
    e.preventDefault()
    const { username, email } = e.target;
    let x = Math.ceil(Math.random()*10000)
    // setUser({
    //   id: x,
    //   name: username.value,
    //   email: email.value
    // })

    setUsers([...users,{
      id: x,
      name: username.value,
      email: email.value
    }])

    // users.forEach(elem=>{
    //   if(elem.email !== email.value){
    //     setUsers([...users,{
    //       id: x,
    //       name: username.value,
    //       email: email.value
    //     }])
    //   }else{
    //     alert("Sorry this email is busy")
    //   }
    // })
  }

  return (
    <div className='App'>
      <h1>Contact Us</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis reprehenderit officia error accusantium harum doloremque et dolorem voluptatem molestiae alias. Iusto veritatis placeat obcaecati error maxime aliquid libero unde tempore.</p>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Name' name='username' required/>
        <input type="email" placeholder='Email' name='email' required/>
        <input type="submit" value="SEND"/>
      </form>
      <h2>Users</h2>
      <ul className='App__users'>
        {
          users.map((elem,index)=>{
            return(
              <li key={index}><em>{elem.name}</em>{elem.email}</li> 
            )
          })
        }
      </ul>
    </div>
  )
}
