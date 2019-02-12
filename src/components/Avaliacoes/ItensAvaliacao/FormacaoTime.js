import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';
import 'react-rater/lib/react-rater.css'
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';

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
  });  

const PremiacaoJogador = (classes) => (
    <div className="estofamentoLista" >
        <Grid container wrap="nowrap" spacing={0} className={classes.larguraPaper}>
            <Grid item wrap="nowrap" xs={1}>
                <Icon className={classes.icon}>games</Icon>
            </Grid>
            <Grid item wrap="nowrap" xs={4}>
                <Typography component="span" className={classes.inline} color="textPrimary">
                  Adrian Valente
                </Typography>
            </Grid>
            <Grid item xs={7}>
                <FormControl className={classes.formControl} className="tamanho_100porcento" >
                    <Select className={classes.selectEmpty} className="tamanho_100porcento" >
                        <MenuItem value={0}>0</MenuItem>
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                        <MenuItem value={6}>6</MenuItem>
                        <MenuItem value={7}>7</MenuItem>
                        <MenuItem value={8}>8</MenuItem>
                        <MenuItem value={9}>9</MenuItem>
                        <MenuItem value={10}>10</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
        </Grid>
    </div>
)

export default PremiacaoJogador