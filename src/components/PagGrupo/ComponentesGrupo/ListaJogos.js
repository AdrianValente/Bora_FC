import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import InformacoesJogosRealizados from '../../ListBoard/InformacoesJogosRealizados';
import InformacoesGrupo from '../../InformacoesGrupo';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  espacamentoContent: {
    padding: '15px 10px 70px 10px',
  }
});

function ListJogos(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={16} className={classes.espacamentoContent}>
        <Grid item xs={12}>
          <InformacoesGrupo quantidadetotal={'21'} jogadorconfirmado={'8'} jogadorhabilitados={'12'} />
        </Grid>

        <Grid item xs={12}>
          <InformacoesJogosRealizados quantidadetotal={'20/07/2019'} />
        </Grid>
        
      </Grid>
    </div>
  );
}

ListJogos.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ListJogos);