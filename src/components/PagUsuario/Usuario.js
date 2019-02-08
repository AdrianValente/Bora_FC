import React from 'react';
import Header from '../Header/Header';
import NavBar from '../NavBar/NavBar'
import AbasUsuario from './ComponentesUsuario/AbasUsuario';

import { withStyles } from '@material-ui/core/styles';
import imgUrl from '../../img/bg_user_1.jpg';

const styles = theme => ({
  body: {
    backgroundImage: 'url(' + imgUrl + ')',
    backgroundRepeat  : 'repeat-x',
    backgroundPosition: 'center',
  },
});

function User(props) {

  return (
    <div className={`bgContainerUser`}  >
      <NavBar />      
      <Header />
      <AbasUsuario />
    </div>
  );
}

export default withStyles(styles)(User);