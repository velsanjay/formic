import { useFormik } from 'formik'
import React from 'react'
import * as yup from 'yup'
import { UseData } from '../Base/DataProvider'
import { Button, TextField } from '@mui/material'
import { useHistory } from 'react-router-dom'

const BookSchemaValidation = yup.object({
  id: yup.string().required("Please Specify your ID"),
  author: yup.string().required("Please Specify Your Author Name"),
  title: yup.string().required("Please Specify Book Name"),
  edition: yup.string().required("Please Specify Your Book Edition"),
  publication: yup.string().required("Please Specify Name Of The Publication"),
  ISBN: yup.string().required("Please Specify ISBN No").min(4, "It's Not Valid ISBN Number")
})

function AddBook() {
  const history = useHistory();
  const { book, setBook } = UseData();
  const { values, handleChange, handleSubmit, handleBlur, errors, touched } = useFormik({
    initialValues: {
      id: "",
      title: "",
      author: "",
      edition: "",
      publication: "",
      ISBN: ""
    },
    validationSchema: BookSchemaValidation,
    onSubmit: (newBook) => {
      addBook(newBook)
      setBook([...book,newBook])
    }
  })

  const addBook = async(newBook) => {
    
    try {

      const res = await fetch(
        "https://6424560ad6152a4d480cc491.mockapi.io/library",
        {
        method:"POST",
        body:JSON.stringify(newBook),
        headers:{
          "content-type":"application/json",
        },
      }
      )
      const data = await res.json()

      history.push("/")

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='out'>
      <div className='edit'>
        <h2>Add New Book!</h2>
        <form onSubmit={handleSubmit} className='add'> 
          <TextField
            id="outlined-basic"
            name='id'
            label="ID"
            onBlur={handleBlur}
            value={values.id}
            variant="outlined" 
            onChange={handleChange}
            />
            {touched.id && errors.id ? <p style={{color:"crimson"}}>{errors.id}</p>:""}

          <TextField
          name='title'
            id="outlined-basic"
            label="Title"
            onBlur={handleBlur}
            value={values.title}
            onChange={handleChange}
            variant="outlined" />
            {touched.title && errors.title ? <p style={{color:"crimson"}}>{errors.title}</p>:""}

          <TextField
          name='author'
            id="outlined-basic"
            label="Author"
            onBlur={handleBlur}
            value={values.author}
            onChange={handleChange}
            variant="outlined" />
            {touched.author && errors.author ? <p style={{color:"crimson"}}>{errors.author}</p>:""}

          <TextField
          name='edition'
            id="outlined-basic"
            label="Edition"
            onBlur={handleBlur}
            value={values.edition}
            onChange={handleChange}
            variant="outlined" />
            {touched.edition && errors.edition ? <p style={{color:"crimson"}}>{errors.edition}</p>:""}

          <TextField
          name='publication'
            id="outlined-basic"
            label="Publication"
            onBlur={handleBlur}
            value={values.publication}
            onChange={handleChange}
            variant="outlined" />
            {touched.publication && errors.publication ? <p style={{color:"crimson"}}>{errors.publication}</p>:""}

          <TextField
          name='ISBN'
            id="outlined-basic"
            label="ISBN NO"
            onBlur={handleBlur}
            value={values.ISBN}
            onChange={handleChange}
            variant="outlined" />
            {touched.ISBN && errors.ISBN ? <p style={{color:"crimson"}}>{errors.ISBN}</p>:""}

          <Button
          type='submit'
            variant="contained"
            color='success'
          >Update</Button>
        </form>
      </div>
    </div>
  )
}

export default AddBook