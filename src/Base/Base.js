
import React from 'react'
import { Route, Switch } from 'react-router-dom';
import DashBoard from '../Component/DashBoard';
import EditBook from '../Component/EditBook';
import View from '../Component/View';
import AddBook from '../Component/AddBook';
import NavBar from '../Component/NavBar';

function Base() {

  return (
    <div>
      <NavBar/>
      <Switch>
        <Route exact path="/">
          <DashBoard />
        </Route>

        <Route path="/view/:id">
          <View />
        </Route>

        <Route path="/edit/:id">
          <EditBook />
        </Route>

        <Route path="/add">
          <AddBook />
        </Route>
      </Switch>
    </div>

  )
}

export default Base