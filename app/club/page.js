import React from 'react'

function page() {
  return (
    <div>

      <h1>clubs page</h1>
      <div className='flex gap-4'>
        <a href="/club/1">go to club 1</a>
        <a href="/club/2">go to club 2</a>
        <a href="/club/3">go to club 3</a>
      </div>

      <button>create club</button>

    </div>
  )
}

export default page