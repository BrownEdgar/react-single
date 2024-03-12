import React from 'react'
import "./App.scss"

export default function App() {
  return (
    <div className='App'>
      <h1>My Services</h1>
      <p>I specialize in wedding photography, but I also love photographing couples and families</p>
      <div className='App__content'>
        <div className='App__content-phototype'>
          <img src="https://images.unsplash.com/photo-1561525140-c2a4cc68e4bd?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="families" />
          <h4>FAMILIES</h4>
        </div>
        <div className='App__content-phototype'>
          <img src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="weddings" />
          <h4>WEDDINGS</h4>
        </div>
        <div className='App__content-phototype'>
          <img src="https://images.unsplash.com/photo-1559435578-231f6137aac5?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="couple" />
          <h4>COUPLES</h4>
        </div>
      </div>
    </div>
  )
}
