import React, { useState } from 'react'
import Title from './UI/Title/Title'
import './App.scss'
import Modal from './Lessons/Modal/Modal'

export default function App() {
  const [data, setdata] = useState(['html', 'css', 'Java Script', 'React.js', 'Node.js', 'Python'])
  const [isOpen, setIsOpen] = useState(false);
  const [deletedItem, setDeletedItem] = useState(null)

  const toggleModal = () => setIsOpen(!isOpen);
  const deletElementByName = () => {
    setdata((prevData) => prevData.filter(elem => elem !== deletedItem));
    toggleModal()
  }

  return (
    <div className='App'>
      {isOpen ? (
        <Modal title='Are you sure' toggleModal={toggleModal}>
          <button onClick={toggleModal}>close</button>
          <button onClick={deletElementByName}>DELETE</button>
        </Modal>
      ) : null}

      <Title variant='dark' title="React Modal example" size='xl' />
      <div className="App__container">
        {
          data.map(elem => {
            return (
              <div key={elem}>
                <h2>{elem}</h2>
                <button className='App__delete' onClick={() => {
                  toggleModal()
                  setDeletedItem(elem)
                }}>Delete</button>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
