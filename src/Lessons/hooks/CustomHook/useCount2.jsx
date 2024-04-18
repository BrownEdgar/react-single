import React, { useState } from 'react'

export default function useCount2({ numberType }) {
  const [count, setCount] = useState(() => {
    const random = Math.floor(Math.random() * 1000);//
    if (numberType === 'odd') {
      return random % 2 == 1 ? random : random + 1;
    } else {
      return random % 2 == 0 ? random : random + 1;
    }
  });

  return count
}
