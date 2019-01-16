
import React from "react";
import { Container } from 'react-materialize';
import { Switch, Route } from 'react-router-dom'

import PaginaGrupo from "./views/Grupo";
import PaginaPrincipal from "./views/Principal";
import Login from "./views/Login";
import PaginaUsuario from "./views/Usuario";

const Main = () => (
      <Container>
        <Switch>
          <Route exact path='/' component={PaginaPrincipal}/>
          <Route path='/login' component={Login}/>
          <Route path='/usuario' component={PaginaUsuario}/>
          <Route path='/grupo' component={PaginaGrupo}/>
        </Switch>
      </Container>
 );
  
  export default Main;