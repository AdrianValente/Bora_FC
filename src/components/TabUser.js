import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

import AboutUser from '../views/User/AboutUser';
import ListBoard from '../views/User/ListBoard';


function TabContainer(props) {
  return (
    <Typography component="div" >
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
});

class TabUser extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs fullWidth value={value} onChange={this.handleChange}>
            <Tab label="Perfil do Jogador" />
            <Tab label="Quadro de Avisos" />
            <Tab label="Jogos" />
          </Tabs>
        </AppBar>
        {value === 0 && <TabContainer>
          <AboutUser />
        </TabContainer>}
        {value === 1 && <TabContainer>
          <ListBoard />
        </TabContainer>}
        {value === 2 && <TabContainer>Item Three Jogos</TabContainer>}
      </div>
    );
  }
}

TabUser.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TabUser);