import React, { useState } from 'react'

export default function useCount({ initialValue, min, max }) {
  const [value, setValue] = useState(initialValue);

  const plus = () => setValue(value < max ? value + 1 : value);
  const minus = () => setValue(value > min ? value - 1 : value);

  return (
    [value, { plus, minus }]
  )
}
