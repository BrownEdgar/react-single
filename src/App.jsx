import React, { useState } from 'react'
import './App.scss'

import Provider from './i18n/Provider'
import LOCALES from './i18n/locale'
import Translate from './i18n/Translate'

export default function App() {
  const [language, setLanguage] = useState(LOCALES.ENGLISH);
  const handleChange = (e) => {
    setLanguage(e.target.value)// RUSSIAN => 'ru-ru'
  }
  return (
    <Provider locale={language}>
      <div className='App'>
        <select name="language" id="language" onChange={handleChange}>
          <option value={LOCALES.ENGLISH}>en</option>
          <option value={LOCALES.RUSSIAN}>ru</option>
          <option value={LOCALES.ARMENIAN}>hy</option>
        </select>
        <div className="App__posts">
          <Translate id='title' tagName='h1' className="box"
            value={{ extraField: "it's amazing!" }} />
          <Translate id='desc' tagName='p' className='selected' />
          <Translate id='btnText' tagName='button' className='btn' />
        </div>
      </div>
    </Provider>

  )
}
