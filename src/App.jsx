import { useState } from 'react'
import "./App.css"

export default function App() {
  const [blogs] = useState([
    {
      id: 1,
      heading: "Aliquam Hendrerit Mi Metus",
      info: "It is with great pleasure that I speak to the I've experienced with the Cantrell Brothers and the team at Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit architecto maxime blanditiis, delectus accusantium similique sunt fuga distinctio dicta eos. Vitae accusamus suscipit hic architecto, commodi blanditiis totam nemo deleniti!",
    },
    {
      id: 2,
      heading: "Mauris Vulputate Cras Amet",
      info: "It is with great pleasure that I speak to the I've experienced with the Cantrell Brothers and the team at Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit architecto maxime blanditiis, delectus accusantium similique sunt fuga distinctio dicta eos. Vitae accusamus suscipit hic architecto, commodi blanditiis totam nemo deleniti!",
    },
    {
      id: 3,
      heading: "Suspendisse Nullam Sodales",
      info: "It is with great pleasure that I speak to the I've experienced with the Cantrell Brothers and the team at Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit architecto maxime blanditiis, delectus accusantium similique sunt fuga distinctio dicta eos. Vitae accusamus suscipit hic architecto, commodi blanditiis totam nemo deleniti!",
    },
  ]);

  const [currentId, setCurrentId] = useState(null)

  const handleClick = (id) => {
    if (currentId === id) {
      setCurrentId(null)
    } else {
      setCurrentId(id)
    }
  }

  return (
    <div className='App'>
      <h1>Our Blog</h1>
      <div className='Blogs'>
        {
          blogs.map(elem => {
            return (
              <div key={elem.id}>
                <h5>AXONVIP | 01 AUG, 2019</h5>
                <h3>{elem.heading}</h3>
                <p className={`${(currentId === elem.id) ? 'active' : ''}`}>
                  {
                    (currentId === elem.id)
                      ? elem.info
                      : elem.info.slice(0, 110).concat('...')
                  }
                </p>
                <button onClick={() => handleClick(elem.id)}>
                  {(currentId === elem.id) ? 'HIDE' : 'READ MORE'}
                </button>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
