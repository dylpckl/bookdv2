// 'use client'
// import { useState } from 'react'
import prisma from '../../lib'

function page() {
  // const [name, setName] = useState('nameTest')
  // const [description, setDescription] = useState('descTest')
  // const [ownerId, setOwnerId] = useState(1)

  // const createClub = async () => {
  //   try {
  //     // const body = { name, description, ownerId }
  //     const body = name
  //     await fetch(`/api/club`, {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify(body)
  //     })
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }

  return (
    <div>

      <h1>clubs page</h1>
      <div className='flex gap-4'>
        <a href="/club/1">go to club 1</a>
        <a href="/club/2">go to club 2</a>
        <a href="/club/3">go to club 3</a>
      </div>

      {/* <button onClick={createClub}>create club</button> */}

    </div>
  )
}

export default page