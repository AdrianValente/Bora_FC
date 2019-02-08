import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Icon from '@material-ui/core/Icon';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
    fontWeight: 'bold',
    fontSize: '1rem',
    marginRight: '5px',
  },
});

function EstatisticasUsuario(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>

      <List >
        <ListItem>
            <Icon className={classes.icon}>games</Icon>
            <ListItemText secondary={
                                  <React.Fragment>
                                    <Typography component="span" className={classes.inline} color="textPrimary">
                                      100%
                                    </Typography>
                                    {' Aproveitamento de Jogos'}
                                  </React.Fragment>
                                  }
              />
        </ListItem>
        <Divider />

        <ListItem >
            <Icon className={classes.icon}>games</Icon>
            <ListItemText secondary={
                                  <React.Fragment>
                                    <Typography component="span" className={classes.inline} color="textPrimary">
                                      0
                                    </Typography>
                                    {' Premiação de Melhores Jogadores'}
                                  </React.Fragment>
                                  }
              /> 
        </ListItem>
        <Divider />

        <ListItem >
            <Icon className={classes.icon}>games</Icon>
            <ListItemText secondary={
                                  <React.Fragment>
                                    <Typography component="span" className={classes.inline} color="textPrimary">
                                      409
                                    </Typography>
                                    {' Premiação de Perna de Pal'}
                                  </React.Fragment>
                                  }
              /> 
        </ListItem>
        <Divider />

        <ListItem >
            <Icon className={classes.icon}>games</Icon>
            <ListItemText secondary={
                                  <React.Fragment>
                                    <Typography component="span" className={classes.inline} color="textPrimary">
                                      0
                                    </Typography>
                                    {' Furão'}
                                  </React.Fragment>
                                  }
              /> 
        </ListItem>
        <Divider />

        <ListItem >
            <Icon className={classes.icon}>games</Icon>
            <ListItemText secondary={
                                  <React.Fragment>
                                    <Typography component="span" className={classes.inline} color="textPrimary">
                                      0%
                                    </Typography>
                                    {' Saldo de Gols'}
                                  </React.Fragment>
                                  }
              /> 
        </ListItem>

      </List>
    </div>
  );
}

EstatisticasUsuario.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EstatisticasUsuario);