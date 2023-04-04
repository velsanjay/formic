

import { Button } from '@mui/material';
import React from 'react'
import { useHistory } from 'react-router-dom'

export default function NavBar() {
  const history = useHistory();
  return (
    <div className='nav'>
      <Button
        style={{ color: "white" }}
        onClick={() => { history.push("/add") }}
        variant="outlined">Add New Book</Button>

      <Button
        style={{ color: "white" }}
        onClick={() => { history.push("/") }}
        variant="outlined">DashBoard   </Button>
    </div>
  )
}

