import { useState } from 'react'
import "./App.css"

export default function App() {
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      heading: "Aliquam Hendrerit Mi Metus",
      info: "It is with great pleasure that I speak to the I've experienced with the Cantrell Brothers and the team at..."
    },
    {
      id: 2,
      heading: "Mauris Vulputate Cras Amet",
      info: "It is with great pleasure that I speak to the I've experienced with the Cantrell Brothers and the team at..."
    },
    {
      id: 3,
      heading: "Suspendisse Nullam Sodales",
      info: "It is with great pleasure that I speak to the I've experienced with the Cantrell Brothers and the team at..."
    },
  ]);
  return (
    <div className='App'>
      <h1>Our Blog</h1>
      <div className='Blogs'>
        {
          blogs.map(elem=>{
            return(
              <div key={elem.id}>
                <h5>AXONVIP | 01 AUG, 2019</h5>
                <h3>{elem.heading}</h3>
                <p>{elem.info}</p>
                <button>READ MORE</button>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
