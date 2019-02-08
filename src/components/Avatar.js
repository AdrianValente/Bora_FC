import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';

import imgAvatarGroup from '../img/user_default.jpg';

const styles = {
  avatar: {
  },
  bigAvatar: {
    width: 150,
    height: 150,
  },
};

function ImageAvatarsGroups(props) {
  const { classes } = props;
  return (
    <Grid container justify="center" alignItems="center">
      <Avatar alt="Grupo" src={imgAvatarGroup} className={classes.bigAvatar} />
    </Grid>
  );
}

ImageAvatarsGroups.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImageAvatarsGroups);