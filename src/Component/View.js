import { Button } from '@mui/material';
import React from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { UseData } from '../Base/DataProvider';

function View() {
    const {book}=UseData();
    const data=useParams();
    const history=useHistory();

    const ViewList = book.filter((prop)=>prop.id==data.id)
    

  return (
    <div className='out' style={{height:"100vh",paddingTop:"14%"}} >
   {ViewList.map((prod,idx)=>(
    <div className='card view' key={idx}>
    <h3><b>Book Name : </b>{prod.title}</h3><hr />
    <p><b>Author Name : </b>{prod.author}</p>
    <p><b>Edition : </b>{prod.edition}</p>
    <p><b>Publication : </b>{prod.publication}</p>
    <p><b>ISBN NO : </b>{prod.ISBN}</p>
    <div className='but'>
    <Button 
    color="secondary"
    onClick={()=>history.push('/')}
    variant="contained">Go Back</Button>
    </div>
  </div>
   ))}   
    </div>
  )
}

export default View