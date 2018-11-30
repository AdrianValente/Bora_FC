import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';


import Header from '../components/Header/Header';
import Avatar from '../components/Avatar';
import ListInfoUser from '../components/ListInfoUser';
import ImageAvatarsGroups from '../components/AvatarGroup';

import imgUrl from '../img/bg_user_1.jpg';

const styles = theme => ({
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: `${theme.spacing.unit * 1}px`,
  },
  paper: {
    padding: theme.spacing.unit,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    whiteSpace: 'nowrap',
  },
  bgContainerUser: {
    backgroundImage: 'url(' + imgUrl + ')',
    backgroundRepeat  : 'repeat-x',
    backgroundPosition: 'center',
  },

});

function Home(props) {
  const { classes } = props;

  return (
    <div>
      <Header />

      <div className={`bgContainerUser ${classes.bgContainerUser} ${classes.container}`} >
        <div style={{ gridColumnEnd: 'span 12' }}>
            <Avatar nome={'Usuário 01'} imgAvatar={'../img/user_default.jpg'} />
        </div>
        <div style={{ gridColumnEnd: 'span 12', }} className="alignGridUser" >
            Nome Usuário ID:#123456 <br/>
            email@usuario.com <br/>
            Posição em Campo
        </div>
        <div style={{ gridColumnEnd: 'span 4' }} className="alignGridUser">
          <Icon className={classes.icon}>games</Icon> <br/>
          Total de Jogos <br/>
          XX
        </div>
        <div style={{ gridColumnEnd: 'span 4' }} className="alignGridUser">
          <Icon className={classes.icon}>sentiment_very_satisfied</Icon> <br/>
          Partidas Vencidas <br/>
          XX
        </div>
        <div style={{ gridColumnEnd: 'span 4' }} className="alignGridUser">
          <Icon className={classes.icon}>grade</Icon> <br/>
          Total de Gols <br/>
          XX
        </div>
      </div>
      <div style={{ gridColumnEnd: 'span 12' }}>
        <Paper className={classes.paper}>
          <ListInfoUser />
        </Paper>
    </div>

    <div className={`${classes.container}`}>
        <div style={{ gridColumnEnd: 'span 3' }}>
          <ImageAvatarsGroups />
        </div>
        <div style={{ gridColumnEnd: 'span 3', }} className="alignGridUser" >
          <ImageAvatarsGroups />
        </div>
        <div style={{ gridColumnEnd: 'span 3' }} className="alignGridUser">
          <ImageAvatarsGroups />
        </div>
        <div style={{ gridColumnEnd: 'span 3' }} className="alignGridUser">
          <ImageAvatarsGroups />
        </div>
        <div style={{ gridColumnEnd: 'span 3' }} className="alignGridUser">
          <ImageAvatarsGroups />
        </div>
      </div>

    </div>
  );
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);