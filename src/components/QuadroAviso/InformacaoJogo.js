import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

import urlImagem from '../../img/group_default.jpg';
import { red } from '@material-ui/core/colors';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: 8,
    color: theme.palette.text.secondary,
    margin: 5,
  },
  card: {
    maxWidth: '100%',
    margin: 5,
  },
  avatar: {
    width: 50,
    height: 50,
  },
  button: {
    margin: 5,
    fontSize: 12,
    padding: '5px 15px 5px 10px',
  },
  extendedIcon: {
    fontSize: 18,
    top: 2,
    position: 'relative',
  },
  formatarCampos: {
    fontSize: 12,
  },
  formatarposicionamentoRodape: {
    textAlign: 'right',
  },
  formatarTextoAviso: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

function InformacaoJogo(props) {
  const { classes, grupo, data, hora, local, aviso } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={12}>

          <Paper item xs={12} className={classes.paper}>

            <Grid container spacing={0}>
              <Grid item xs={2}>
                <Avatar className={classes.avatar} src={urlImagem} />
              </Grid>
              <Grid item xs={10} className={classes.formatarCampos}>
                Grupo: <b>{grupo}</b><br/>
                Data: <b>{data}</b> às <b>{hora}h</b><br/>
                Local: <b>{local}</b>
              </Grid>            
              <Grid item xs={12} spacing={0} className={`${aviso} ${classes.formatarposicionamentoRodape}`} >
                  <div className={`cancelado display_invisivel ${classes.formatarTextoAviso}`} ><Icon className={classes.extendedIcon}>cancel</Icon> Jogo Cancelado</div>
                  <div className={`realizado display_invisivel ${classes.formatarTextoAviso}`} ><Icon className={classes.extendedIcon}>flag</Icon> Jogo Realizado</div>
                  <div className={`fim display_invisivel ${classes.formatarTextoAviso}`} ><Icon className={classes.extendedIcon}>delete_forever</Icon> O Grupo acabou</div>
              </Grid>
            </Grid>
            
          </Paper>
          
        </Grid>
      </Grid>
    </div>
  );
}

InformacaoJogo.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InformacaoJogo);