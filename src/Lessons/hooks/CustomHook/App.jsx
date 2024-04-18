import React from 'react'

import useFetch from './useFetch';

export default function App() {
  const [data, loading, error] = useFetch('https://jsonplaceholder.typicode.com/todos');

  return (
    <div>
      <pre>
        {loading ? 'loading...' : JSON.stringify(data)}
      </pre>
    </div>
  )
}
