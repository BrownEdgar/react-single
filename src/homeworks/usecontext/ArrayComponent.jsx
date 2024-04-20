import React from "react"
import useArray from "./useArray"

export default function ArrayComponent() {
  const { array, push, filter, remove, clear, set, update } = useArray([
    1, 2, 3, 4, 5, 6,
  ])

  return (
    <div>
      <div>{array.join(", ")}</div>
      <button onClick={() => push(7)}>Add 7</button>
      <button onClick={() => remove(1)}>Remove Second Element</button>
      <button onClick={() => filter(n => n < 3)}>
        Keep Numbers Less Than 4
      </button>
      <button onClick={clear}>Clear</button>
      <button onClick={() => set([1, 2])}>Set To 1, 2</button>
      <button onClick={() => update(1, 9)}>Change Second Element To 9</button>
    </div>
  )
}