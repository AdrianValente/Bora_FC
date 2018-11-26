
import React from "react";
import { Switch, Route } from 'react-router-dom'

import Home from "../views/Home";
import User from "../views/User";
import Home from "../views/Group";
import Login from "../views/Login";

const Rotas = () => (
  <main>
    <Container>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/usuario' component={User}/>
        <Route path='/grupo' component={Group}/>
        <Route path='/login' component={Login}/>
      </Switch>
    </Container>
  </main>  
);

export default Rotas;