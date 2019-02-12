import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import InformacoesJogosRealizados from '../../ListBoard/InformacoesJogosRealizados';
import InformacoesGrupo from '../../InformacoesGrupo';
import SeparacaoData from '../../SeparadorItemData';

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

        <InformacoesJogosRealizados data={'06/07/2019'} jogadores={'12'} times={'3'} gols={'07'} cartoes={'0'} />
        <SeparacaoData date={'Julho 2018'} />

        <InformacoesJogosRealizados data={'22/06/2019'} jogadores={'32'} times={'4'} gols={'30'} cartoes={'8'} />
        <InformacoesJogosRealizados data={'15/06/2019'} jogadores={'10'} times={'2'} gols={'05'} cartoes={'1'} />
        <InformacoesJogosRealizados data={'08/06/2019'} jogadores={'12'} times={'3'} gols={'07'} cartoes={'0'} />
        <SeparacaoData date={'Junho 2018'} />

      </Grid>
    </div>
  );
}

ListJogos.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ListJogos);