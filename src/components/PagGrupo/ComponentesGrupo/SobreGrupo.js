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
  destaqueNomeGrupo: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  complementoIdGrupo: {
    fontSize: 12,
  },
  alinharPosicaoSobre: {
    padding: '10px 15px',
    fontSize: 13,
  },
  alignGridGroup: {
    direction: 'column',
    padding: '10px 0',
    lineHeight: '22px',
  }  
});

function SobreGrupo(props) {
  const { classes } = props;

  return (
    <div>

      <div className={`bgContainerUser ${classes.bgContainerUser} ${classes.container}`} >    
        <div style={{ gridColumnEnd: 'span 4' }}>
            <Avatar nome={'Usuário 01'}  />
        </div>
        <div style={{ gridColumnEnd: 'span 8', }} className={classes.alinharPosicaoSobre} alignItems="center" >
            <span className={classes.destaqueNomeGrupo} >Nome do Grupo</span> <span className={classes.complementoIdGrupo}> ID:#123456</span><br/>
            35 jogos Realizados 
            <BtnEditarGrupo />
        </div>

       </div>

       <div className={classes.containerList}>
        <Paper className={classes.paper} style={{ gridColumnEnd: 'span 12' }}>
            <div style={{ gridColumnEnd: 'span 12', }} className={classes.alinharPosicaoSobre} >
              Sobre o grupo - Texto livre para o administrador escrever as regras do grupo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus velit et vehicula faucibus. Maecenas ante massa, aliquet eget vulputate vitae, varius quis purus. Ut eget eros neque. Phasellus pulvinar maximus nulla, quis accumsan leo ultrices id. Mauris tempor nisl tortor, sed facilisis tellus consectetur quis. Phasellus eu purus nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec malesuada felis. Integer aliquam scelerisque suscipit.
            </div>
        </Paper>
       </div>
        
    </div>
  );
}

SobreGrupo.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SobreGrupo);