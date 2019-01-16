import React, { Component } from 'react';

import NavBar from '../components/NavBar/NavBar'
import Header from '../components/Header/Header';
import SobreGrupo from './Group/SobreGrupo';
import AbasGrupo from './Group/AbasGrupo';

class PagGroup extends Component {
  render() {
    return (
      <div>
          <NavBar />
          <Header />
         
          <SobreGrupo />
          <AbasGrupo />

      </div>
    );
  }
}

export default PagGroup;