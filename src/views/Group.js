import React, { Component } from 'react';

import NavBar from '../components/NavBar/NavBar'
import Header from '../components/Header/Header';
import AboutGroup from './Group/AboutGroup';
import TabGroup from '../components/TabGroup';

class PagGroup extends Component {
  render() {
    return (
      <div>
          <NavBar />
          <Header />
         
          <AboutGroup />
          <TabGroup />

      </div>
    );
  }
}

export default PagGroup;