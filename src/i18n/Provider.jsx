import React, { Fragment } from 'react'
import { IntlProvider } from 'react-intl'
import LOCALES from './locale'
import messages from './messages'

export default function Provider({ children, locale }) {
  return (
    <IntlProvider
      textComponent={Fragment}
      defaultLocale={LOCALES.ENGLISH}
      locale={locale} // locale = 'ru-ru'
      messages={messages[locale]} // {title} => {title} ru
    >
      {children}
    </IntlProvider>
  )
}

