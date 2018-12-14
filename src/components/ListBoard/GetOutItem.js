import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';

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
    width: 40,
    height: 40,
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
    fontSize: 15,
  },
  formatarCampos: {
    fontSize: 12,
  },
});

const grupo = `Tabajara Futebol Clube`;

function GetOutItem(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={12}>

          <Paper item xs={12} className={classes.paper}>

            <Grid container wrap="nowrap" spacing={0}>
              <Grid item xs={2}>
                <Avatar className={classes.avatar} src={urlImagem} />
              </Grid>
              <Grid item xs={8} className={classes.formatarCampos}>
                Você <b>Saiu</b> do Grupo: <br/>
                <b>{grupo}</b><br/>
              </Grid>
            </Grid>

          </Paper>
          
        </Grid>
      </Grid>
    </div>
  );
}

GetOutItem.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GetOutItem);