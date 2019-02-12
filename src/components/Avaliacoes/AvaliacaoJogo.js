import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'
import Typography from '@material-ui/core/Typography';

import Header from '../Header/Header';
import urlImagem from '../../img/group_default.jpg';
import NotaItem from './ItensAvaliacao/NotaCampo';
import PremiacaoJogador from './ItensAvaliacao/PremiacaoJogador';
import FormacaoTime from './ItensAvaliacao/FormacaoTime';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: 8,
    color: theme.palette.text.secondary,
    margin: 5,
    width: '100%',
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
    textAlign: 'center',
    fontSize: 30,
  },
  formatarCampoRating: {
    fontSize: 35,
    marginTop: '-15px',
  },
  dataJogo: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  alinhamentoPaineis: {
    justifyContent: 'space-between',
  },
  posicionamentoNotasArea: {
    paddingTop: 10,
  },

});

const grupo = `Tabajara Futebol Clube`;
const data = `14/12/2018`;

function AvalicaoJogo(props) {
  const { classes } = props;
  
    return (
      <div>
        <Header />
         
        <Grid container spacing={0} >
          <Paper item xs={12} className={classes.paper}>

            <Grid container wrap="nowrap" spacing={0} className={classes.larguraPaper}>
              <Grid item xs={2}>
                <Avatar className={classes.avatar} src={urlImagem} />
              </Grid>
              <Grid item xs={5} className={classes.formatarCampos}>
                Grupo: <b>{grupo}</b><br/>
                Data: <b>{data}</b>
              </Grid>
              <Grid item xs={5} className={classes.formatarposicionamentoRodape}>
                <Rater total={5} rating={5} interactive={true} />
              </Grid>
            </Grid>

            <Grid className={classes.posicionamentoNotasArea}>

              <NotaItem />
              <Divider />
              <PremiacaoJogador/>
              <Divider />
              <PremiacaoJogador/>

            </Grid>

            <Grid className={classes.posicionamentoNotasArea}>
              <h4 >Placar do Jogo</h4>

              <FormacaoTime />

            </Grid>

          </Paper>
        </Grid>

      </div>
  );
}

AvalicaoJogo.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AvalicaoJogo);