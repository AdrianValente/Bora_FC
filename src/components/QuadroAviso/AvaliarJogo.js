import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

import urlImagem from '../../img/group_default.jpg';

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
    margin: 10,
    fontSize: 10,
    padding: 5,
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
    fontSize: 15,
  },
  formatarCampos: {
    fontSize: 12,
  },
  formatarposicionamentoRodape: {
    textAlign: 'right',
  },
});

function AvaliarJogo(props) {
  const { classes, grupo, data, hora, local } = props;

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
            
              <Grid item xs={12} className={classes.formatarposicionamentoRodape}>
                  <Button variant="contained" color="primary" className={classes.button}>
                    <Icon className={classes.extendedIcon}>send</Icon>Avaliar Jogo
                  </Button>
              </Grid>
            </Grid>

          </Paper>
          
        </Grid>
      </Grid>
    </div>
  );
}

AvaliarJogo.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AvaliarJogo);