import React, { useState } from 'react'
import Title from '../../UI/Title/Title'
import './App.scss'

export default function App() {
  const [users, setUsers] = useState([])
  const [hasError, setHasError] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault();
    const { value } = e.target.username;
    const startWithUpperCase = /^[A-Z]/.test(value)
    if (startWithUpperCase) {
      setUsers([...users, value])
    }
    setHasError(!startWithUpperCase)
  }

  return (
    <div>
      <Title title={'Forms in React'} variant='dark' size='xl' />
      <form onSubmit={handleSubmit}>
        <input type="text" name='username' required />
        <p className="error">
          {hasError ? 'usernameMust by start with upperCase' : ''}
        </p>


        <input type="submit" value='save' />
      </form>
    </div>
  )
}


// export default function App() {
//   const [users, setUsers] = useState([]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const { username: { value } } = e.target;
//     if (!users.includes(value)) {
//       setUsers([...users, value]);
//       e.target.reset()
//     } else {
//       alert("Sorry this user alredy with us!")
//     }
//   }

//   const handleDelete = (index) => {
//     setUsers(users.toSpliced(index, 1))
//   }

//   return (
//     <div>
//       <Title title={'Forms in React'} variant='dark' size='xl' />
//       <form onSubmit={handleSubmit}>
//         <input type="text" name='username' required />
//         <input type="submit" value='save' />
//       </form>
//       <hr />
//       <ul>
//         {
//           users.map((elem, index) => {
//             return <li key={index}>
//               {elem}
//               <i className="bi bi-x-octagon" onClick={() => handleDelete(index)}></i>
//             </li>
//           })
//         }
//       </ul>

//     </div>
//   )
// }
