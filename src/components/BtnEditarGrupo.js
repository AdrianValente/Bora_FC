import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class BtnEditarGrupo extends React.Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  

  render() {
    return (
      <div>
        <Button variant="contained"  color="secondary" onClick={this.handleClickOpen}>
          Editar
        </Button>

        <Dialog
          open={this.state.open}
          TransitionComponent={Transition}
          keepMounted
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">
            {"Editar Informações do Grupo"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">

                <form  noValidate autoComplete="off">
                    <TextField
                    id="standard-name"
                    label="Name"                
                    value={this.state.name}         
                    margin="normal"
                    />

                    <TextField
                    id="standard-name"
                    label="Sobrenome"                
                    value={this.state.lastName}         
                    margin="normal"
                    />

                    <TextField
                    id="standard-name"
                    label="Apelido"                
                    value={this.state.NickName}         
                    margin="normal"
                    />

                    <TextField
                    id="standard-name"
                    label="Posição"                
                    value={this.state.position}         
                    margin="normal"
                    />

                </form>

                email@ususario.com.br  ID:#123456789

            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancelar
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Salvar
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default BtnEditarGrupo;