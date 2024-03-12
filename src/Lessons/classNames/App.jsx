import React,{useState} from 'react'
import classNames from "classnames"
import "./App.scss"

export default function App() {
  const [isDark, setIsDark] = useState(false)

  const toggleDark = () => setIsDark(!isDark)

  return (
    <div className='App'>
      <h1 className='App__heading App__heading-light'>Heading title 1</h1>
      <h1 
      className={classNames("App__heading",{
        "App__heading-dark": isDark,
      })}
      onClick={toggleDark}>Heading title 2</h1>
    </div>
  )
}
