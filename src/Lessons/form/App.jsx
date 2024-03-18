import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Title from '../../UI/Title/Title'
import './App.scss'

export default function App() {
  const [data, setdata] = useState({})
  const [options, setOptions] = useState({
    target: '',
    targetId: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const { target, number } = e.target;
    setOptions({
      target: target.value,
      targetId: number.value
    })
  }

  useEffect(() => {
    if (options.target) {
      const urlParams = `${options.target}/${options.targetId}`;

      axios({
        baseURL: import.meta.env.VITE_DB_URL,
        url: urlParams
      })
        .then(res => setdata(res.data))
        .catch(err => {
          setdata({
            message: err.message,
            status: err.response.status,
            code: err.code,
            options
          })
        })
    }
  }, [options])

  return (
    <div>
      <Title title={'Forms in React'} variant='dark' size='xl' />
      <form onSubmit={handleSubmit}>
        <input type="text" name='target' placeholder='enter target' required />
        <select name="number" id="number">
          {
            new Array(10).fill().map((_, index) => {
              return <option value={index + 1} key={index}>{index + 1}</option>
            })
          }
        </select>
        <input type="submit" value='get Data' />
      </form>
      <hr />
      <pre>
        {JSON.stringify(data, null, 1)}
      </pre>
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
