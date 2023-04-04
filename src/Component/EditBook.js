import React, { useState } from 'react'
import { useHistory, useParams } from 'react-router-dom';
import { UseData } from '../Base/DataProvider';
import { useEffect } from 'react';
import { Button, TextField } from '@mui/material';

function EditBook() {
  const history=useHistory();
  const { book, setBook } = UseData([]);
  const data = useParams();

  const [author, setAuthor] = useState("");
  const [ISBN, setISBN] = useState("");
  const [edition, setEdition] = useState("");
  const [id, setId] = useState("");
  const [publication, setPublication] = useState("");
  const [title, setTitle] = useState("");

  const ViewList = book.find((prop) => prop.id == data.id);
  useEffect(() => {
    setAuthor(ViewList.author)
    setTitle(ViewList.title)
    setISBN(ViewList.ISBN)
    setId(ViewList.id)
    setPublication(ViewList.publication)
    setEdition(ViewList.edition)
  }, [])

  const EditData =async () =>{
    const editIndx = book.findIndex((prop)=> prop.id==data.id)
    
    const NewBook={
      id : data.id ,
      title,
      author,
      publication,
      edition,
      ISBN
    }
    try {
      const res = await fetch(`https://6424560ad6152a4d480cc491.mockapi.io/library/${data.id}`,{
        method :"PUT",
      body : JSON.stringify(NewBook),
      headers:{
        "Content-Type":"application/json"
      }
      })
    } catch (error) {
      console.log(error);
    }
    book[editIndx]=NewBook;
    setBook([...book])
    history.push('/')
  } 

  return (
    <div className='out'>
      <div className='edit'>
        <h2>Edit Book Detail!</h2>
        <TextField
          id="outlined-basic"
          label="ID"
          value={id}
          onChange={(e)=>setId(e.target.value)}
          variant="outlined" />

        <TextField
          id="outlined-basic"
          label="Title"
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
          variant="outlined" />

        <TextField
          id="outlined-basic"
          label="Author"
          value={author}
          onChange={(e)=>setAuthor(e.target.value)}
          variant="outlined" />

        <TextField
          fullWidth
          id="outlined-basic"
          label="Edition"
          value={edition}
          onChange={(e)=>setEdition(e.target.value)}
          variant="outlined" />

        <TextField
          id="outlined-basic"
          label="Publication"
          value={publication}
          onChange={(e)=>setPublication(e.target.value)}
          variant="outlined" />

        <TextField
          id="outlined-basic"
          label="ISBN NO"
          value={ISBN}
          onChange={(e)=>setISBN(e.target.value)}
          variant="outlined" />

        <Button
          variant="contained"
          color='success'
          onClick={()=>EditData()}
        >Update</Button>
      </div>
    </div>
  )
}

export default EditBook