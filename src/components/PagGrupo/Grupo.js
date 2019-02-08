import React, { Component } from 'react';

import NavBar from '../NavBar/NavBar'
import Header from '../Header/Header';
import SobreGrupo from './ComponentesGrupo/SobreGrupo';
import AbasGrupo from './ComponentesGrupo/AbasGrupo';

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