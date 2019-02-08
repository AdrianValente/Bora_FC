import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

import SobreUsario from './SobreUsario';
import QuadroAviso from './QuadroAviso';
import ListaJogos from './ListaJogos';


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

class AbasUsuario extends React.Component {
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
            <Tab label="Perfil do Jogador" classes="aba" />
            <Tab label="Quadro de Avisos" classes="" />
            <Tab label="Jogos" classes="" />
          </Tabs>
        </AppBar>
        {value === 0 && <TabContainer>
          <SobreUsario />
        </TabContainer>}
        {value === 1 && <TabContainer>
          <QuadroAviso />
        </TabContainer>}
        {value === 2 && <TabContainer>
          <ListaJogos />
        </TabContainer>}
      </div>
    );
  }
}

AbasUsuario.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AbasUsuario);