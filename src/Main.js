
import React from "react";
import { Container } from 'react-materialize';
import { Switch, Route } from 'react-router-dom'

import Group from "./views/Group";
import Home from "./views/Home";
import Login from "./views/Login";
import User from "./views/User";

const Main = () => (
    <main>
      <Container>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/login' component={Login}/>
          <Route path='/usuario' component={User}/>
          <Route path='/grupo' component={Group}/>
        </Switch>
      </Container>
    </main>  
  );
  
  export default Main;