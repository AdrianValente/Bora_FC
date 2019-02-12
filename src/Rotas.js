
import React from "react";
import { Switch, Route } from 'react-router-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Usuario from "./views/User";
import Grupo from "./views/Group";
import Login from "./compoenents/Login/Login";
import Principal from "./views/Principal";
import Avaliacao from "./compoenents/Avaliacoes/AvaliacaoJogo";

const Rotas = () => (
  <main>
    <Container>
      <Switch>
        <Route path='/' component={Principal}/>
        <Route path='/usuario' component={Usuario}/>
        <Route path='/grupo' component={Grupo}/>
        <Route path='/login' component={Login}/>
        <Route path='/avaliacao' component={Avaliacao}/>
      </Switch>
    </Container>
  </main>  
);

export default Rotas;