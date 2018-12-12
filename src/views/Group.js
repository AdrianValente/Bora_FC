import React, { Component } from 'react';
import NavBar from '../components/NavBar/NavBar'
import Header from '../components/Header/Header';

class PagGroup extends Component {
  render() {
    return (
      <div>
          <NavBar />
          <Header />
         
         <header>
          <div>
            <img></img>
            Nome Grupo Id Grupo
            XX Jogos Realizados
            <button></button>
            <button></button>
            <button></button>
          </div>
              Infomrações do Grupo
         </header>

         <div>
           aba funçoes do grupo
         </div>

      </div>
    );
  }
}

export default PagGroup;