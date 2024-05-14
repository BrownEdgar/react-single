import React from 'react'
import { FormattedMessage } from 'react-intl'

export default function Translate({ id, value, tagName, className = '' }) {
  return (
    <FormattedMessage id={id} tagName={tagName} values={{ ...value }}>
      {
        (text) => {
          const Element = tagName || 'div'
          return (
            className
              ? <Element className={className}>{text}</Element>
              : <Element>{text}</Element>
          )
        }
      }
    </FormattedMessage>
  )
}
