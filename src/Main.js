
import React from "react";
import { Container } from 'react-materialize';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Grupo from "./components/PagGrupo/Grupo";
import Usuario from "./components/PagUsuario/Usuario";
import Login from "./components/Login/Login";
import Home from "./components/Principal";
import Avaliacao from "./components/Avaliacoes/AvaliacaoJogo";

const Main = () => (
      <Container>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/login' component={Login}/>
          <Route path='/usuario' component={Usuario}/>
          <Route path='/grupo' component={Grupo}/>
          <Route path='/avaliacao' component={Avaliacao}/>
        </Switch>
      </Container>
 );
  
  export default Main;