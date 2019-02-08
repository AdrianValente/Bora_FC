import React from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';

import Avatar from '../../Avatar';
import BtnEditarGrupo from '../../BtnEditarGrupo';

import imgUrl from '../../../img/bg_user_2.jpg';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: `${theme.spacing.unit * 1}px`,
  },
  bgContainerUser: {
    backgroundImage: 'url(' + imgUrl + ')',
    backgroundRepeat  : 'repeat-x',
    color: '#ffffff',
  },
  containerList: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: `${theme.spacing.unit * 1}px`,
    whidth: '100%',
  },

});

function AboutGroup(props) {
  const { classes } = props;

  return (
    <div>

      <div className={`bgContainerUser ${classes.bgContainerUser} ${classes.container}`} >    
        <div style={{ gridColumnEnd: 'span 4' }}>
            <Avatar nome={'Usuário 01'}  />
        </div>
        <div style={{ gridColumnEnd: 'span 8', }} className="alignGridGroup" >
            Nome do Grupo ID:#123456 <br/>
            35 jogos Realizados <br/>
            <BtnEditarGrupo />
        </div>

       </div>

       <div className={classes.containerList}>
        <Paper className={classes.paper} style={{ gridColumnEnd: 'span 12' }}>
            <div style={{ gridColumnEnd: 'span 12', }}  >
            Sobre o grupo
            </div>
        </Paper>
       </div>
        
    </div>
  );
}

AboutGroup.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AboutGroup);