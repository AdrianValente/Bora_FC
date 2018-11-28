import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';

import Header from '../components/Header/Header';

const styles = theme => ({
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: `${theme.spacing.unit * 1}px`,
  },
  paper: {
    padding: theme.spacing.unit,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    whiteSpace: 'nowrap',
  },

});

function CSSGrid(props) {
  const { classes } = props;

  return (
    <div>
      <Header />

      <div className={classes.container}>
        <div style={{ gridColumnEnd: 'span 12' }}>
          <Paper className={classes.paper}>xs=12</Paper>
        </div>
        <div style={{ gridColumnEnd: 'span 12' }}>
          <Paper className={classes.paper}>xs=12</Paper>
        </div>
        <div style={{ gridColumnEnd: 'span 12' }}>
          <Paper className={classes.paper}>xs=12</Paper>
        </div>
        <div style={{ gridColumnEnd: 'span 4' }}>
          <Paper className={classes.paper}>xs=4</Paper>
        </div>
        <div style={{ gridColumnEnd: 'span 4' }}>
          <Paper className={classes.paper}>xs=4</Paper>
        </div>
        <div style={{ gridColumnEnd: 'span 4' }}>
          <Paper className={classes.paper}>xs=4</Paper>
        </div>
      </div>
    </div>
  );
}

CSSGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CSSGrid);