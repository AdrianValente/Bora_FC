import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import UserOfGroup from '../../ListBoard/UserOfGroup';
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

function ListPlayers(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={16} className={classes.espacamentoContent}>
        <Grid item xs={12}>
          <InformacoesGrupo quantidadetotal={'21'} jogadorconfirmado={'8'} jogadorhabilitados={'12'} />
        </Grid>

        <Grid item xs={12}>
          <UserOfGroup />
        </Grid>
        <Grid item xs={12}>
          <UserOfGroup />
        </Grid>
        <Grid item xs={12}>
          <UserOfGroup />
        </Grid>
        <Grid item xs={12}>
          <UserOfGroup />
        </Grid>
        <Grid item xs={12}>
          <UserOfGroup />
        </Grid>
        <Grid item xs={12}>
          <UserOfGroup />
        </Grid>
        <Grid item xs={12}>
          <UserOfGroup />
        </Grid>
        <Grid item xs={12}>
          <UserOfGroup />
        </Grid>
        <Grid item xs={12}>
          <UserOfGroup />
        </Grid>
        <Grid item xs={12}>
          <UserOfGroup />
        </Grid>
        <Grid item xs={12}>
          <UserOfGroup />
        </Grid>
      </Grid>
    </div>
  );
}

ListPlayers.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ListPlayers);