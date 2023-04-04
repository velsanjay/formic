import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import React from 'react'
import { UseData } from '../Base/DataProvider';
import { useHistory } from 'react-router-dom';

function DashBoard() {
  const history=useHistory();
  const { book, setBook } = UseData();

  const DeleteBook = async (idx) => {

    const res = await fetch(`https://6424560ad6152a4d480cc491.mockapi.io/library/${idx}`, {
      method: "DELETE"
    })
    const AfterDelete = book.filter((prop)=> prop.id!=idx)
    setBook(AfterDelete)
  }

  return (
    <div className='out'>
      {book.map((prod, idx) => (
        <div className='card' key={idx}>
          <h3><b>Book Name : </b>{prod.title}</h3><hr />
          <p><b>Author Name : </b>{prod.author}</p>
          <p><b>Edition : </b>{prod.edition}</p>
          <p><b>Publication : </b>{prod.publication}</p>
          <p><b>ISBN NO : </b>{prod.ISBN}</p>
          <div className='but'>
            <Button 
            onClick={()=>{history.push(`/view/${prod.id}`)}}
            variant="contained" 
            color='success'>View</Button>
            <Button 
            onClick={()=>{history.push(`/edit/${prod.id}`)}}
            variant="contained">Edit</Button>
            <Button
              variant="contained"
              color="error"
              onClick={() => DeleteBook(prod.id)}
              startIcon={<DeleteIcon />}>
              Delete
            </Button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default DashBoard