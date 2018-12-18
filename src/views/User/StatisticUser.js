import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Icon from '@material-ui/core/Icon';
import Divider from '@material-ui/core/Divider';

const styles = theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
});

function StatisticUser(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>

      <List >
        <ListItem>
            <Icon className={classes.icon}>games</Icon>
            <ListItemText primary="100% Aproveitamento de Jogos" />
        </ListItem>
        <Divider />

        <ListItem >
            <Icon className={classes.icon}>games</Icon>
            <ListItemText primary="0 Premiação de Melhores Jogadores" />
        </ListItem>
        <Divider />

        <ListItem>
            <Icon className={classes.icon}>games</Icon>
            <ListItemText primary="18 Premiação de Perna de Pal" />
        </ListItem>
        <Divider />

        <ListItem>
            <Icon className={classes.icon}>games</Icon>
            <ListItemText primary="0 Furão" />
        </ListItem>
        <Divider />

        <ListItem>
            <Icon className={classes.icon}>games</Icon>
            <ListItemText primary="0 Saldo de Gols" />
        </ListItem>

      </List>
    </div>
  );
}

StatisticUser.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StatisticUser);