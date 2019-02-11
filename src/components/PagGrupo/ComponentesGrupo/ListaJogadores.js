import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import InformacoesGrupo from '../../InformacoesGrupo';
import ParticipantesGrupo from '../../ListBoard/participantesGrupo';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  espacamentoContent: {
    padding: '15px 10px 70px 10px',
  }
});

function ListaJogadores(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={16} className={classes.espacamentoContent}>
        <Grid item xs={12}>
          <InformacoesGrupo quantidadetotal={'21'} jogadorconfirmado={'8'} jogadorhabilitados={'12'} />
        </Grid>

        <ParticipantesGrupo nome={'Adrian Valente'} posicao={'Artilheiro'} admin={'Admin'} />
        <ParticipantesGrupo nome={'Pé de Pano'} posicao={'Zagueiro'} admin={''}/>
        <ParticipantesGrupo nome={'Jãozinho'} posicao={'Meio Campista'} admin={''} />
        <ParticipantesGrupo nome={'Bola 7'} posicao={'Goleiro'} admin={''}/>
        <ParticipantesGrupo nome={'Scobar'} posicao={'Artilheiro'} admin={'Admin'} />
        <ParticipantesGrupo nome={'Mulinha'} posicao={'Churrasqueiro'} admin={''} />

      </Grid>
    </div>
  );
}

ListaJogadores.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ListaJogadores);