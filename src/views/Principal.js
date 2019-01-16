import React from 'react';
import NavBar from '../components/NavBar/NavBar'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';

import Header from '../components/Header/Header';
import Avatar from '../components/Avatar';
import ListInfoUser from '../components/ListInfoUser';
import ImageAvatarsGroups from '../components/AvatarGroup';

import imgUrl from '../img/bg_user_1.jpg';

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
  bgContainerUser: {
    backgroundImage: 'url(' + imgUrl + ')',
    backgroundRepeat  : 'repeat-x',
    backgroundPosition: 'center',
  },

});

function Home(props) {
  const { classes } = props;

  return (
    <div>
      <NavBar />      
      <Header />
      home
    </div>
  );
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);