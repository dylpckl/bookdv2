import React from 'react'

async function getBooks() {
  const res = await fetch('https://openlibrary.org/api/books?bibkeys=ISBN:0451526538&&format=json')
  // console.log(res)
  return res.json();

}

async function searchBooks(){
  const res = await fetch('http://openlibrary.org/search.json?q=the+lord+of+the+rings')
  return res.json();
}

export default async function page() {
  const data = await searchBooks();
  console.log(data);
  return (
    <div>
      <h1>contest page</h1>

      <ul>
      {data && data.docs.map(book=>(
        <li>{book.title}</li>
      ))}
      </ul>

    </div>
  )
}