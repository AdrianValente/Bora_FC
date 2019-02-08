import React from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Icon from '@material-ui/core/Icon';

import BtnEditarUsuario from '../../BtnEditarUsuario';
import EstatisticasUsuario from './EstatisticasUsuario';
import GruposParticipa from './GruposParticipa';
import Avatar from '../../Avatar';

import imgUrl from '../../../img/bg_user_1.jpg';

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
  posicionarAcabamento: {
    marginTop: '5px',
    marginBottom: '10px',
  },
  bgContainerUser: {
    backgroundImage: 'url(' + imgUrl + ')',
    backgroundRepeat  : 'repeat-x',
    backgroundPosition: 'center',
    color: '#ffffff',
  },
  editPositionBtn: {
    top: '35px',
    float: 'right',
    position: 'relative',
    marginRight: '10px',
    marginTop: '-25px',
  },
  resultadoDestaque: {
    fontSize: '1.6rem',
    fontWeight: 'bold',
    lineHeight: '2rem',
  },
  destaqueInfoUser: {
    fontSize: '1rem',
    lineHeight: '1.4rem',
    marginBottom: '10px',
  },

});

function AboutUser(props) {
  const { classes } = props;

  return (
    <div>

      <div className={`bgContainerUser ${classes.bgContainerUser} ${classes.container}`} >
        
        <div style={{ gridColumnEnd: 'span 12' }}>
          <div className={`${classes.editPositionBtn}`} >
            <BtnEditarUsuario />
          </div>
          <Avatar nome={'Usuário 01'} imgAvatar={'../../../img/user_default.jpg'} />
        </div>
        <div style={{ gridColumnEnd: 'span 12', }}  className={`alignGridUser ${classes.destaqueInfoUser}`} >
            Adrian Valente - ID:#123456 <br/>
            email@usuario.com <br/>
            Centro Avante
        </div>
        <div style={{ gridColumnEnd: 'span 4' }} className={`alignGridUser ${classes.posicionarAcabamento}`} >
          <Icon className={classes.icon}>games</Icon> <br/>
          Total de Jogos <br/>
          <span className={classes.resultadoDestaque} >518</span>
        </div>
        <div style={{ gridColumnEnd: 'span 4' }} className={`alignGridUser ${classes.posicionarAcabamento}`}>
          <Icon className={classes.icon}>sentiment_very_satisfied</Icon> <br/>
          Partidas Vencidas <br/>
          <span className={classes.resultadoDestaque} >179</span>
        </div>
        <div style={{ gridColumnEnd: 'span 4' }} className={`alignGridUser ${classes.posicionarAcabamento}`}>
          <Icon className={classes.icon}>grade</Icon> <br/>
          Total de Gols <br/>
          <span className={classes.resultadoDestaque} >0</span>
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