import React from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';

import Avatar from '../../components/Avatar';
import BtnEditarUsuario from '../../components/BtnEditarUsuario';
import EstatisticasUsuario from './EstatisticasUsuario';
import GruposParticipa from './GruposParticipa';
import ImageAvatarsGroups from '../../components/AvatarGroup';

import imgUrl from '../../img/bg_user_1.jpg';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: `${theme.spacing.unit * 1}px`,
  },
  containerGroup: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: `${theme.spacing.unit * 1}px`,
    marginBottom: 80,
    marginTop: 15,
  },
  containerStatistica: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: `${theme.spacing.unit * 1}px`,
    whidth: '100%',
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
    color: '#ffffff',
  },

});

function AboutUser(props) {
  const { classes } = props;

  return (
    <div>

      <div className={`bgContainerUser ${classes.bgContainerUser} ${classes.container}`} >
        <div className="edit_position_btn">
          <BtnEditarUsuario />
        </div>
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
        
      <div className={classes.containerStatistica}>
        <Paper className={classes.paper} style={{ gridColumnEnd: 'span 12' }}>
          <EstatisticasUsuario />
        </Paper>
      </div>

      <GruposParticipa />
    </div>
  );
}

AboutUser.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AboutUser);