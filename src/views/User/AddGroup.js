import React from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ImageAvatarsGroups from '../../components/AvatarGroup';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: `${theme.spacing.unit * 1}px`,
  },
  containerGroup: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: `${theme.spacing.unit * 1}px`,
    marginBottom: 80,
    marginTop: 15,
  },
  paper: {
    padding: theme.spacing.unit,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    whiteSpace: 'nowrap',
  },


});

function AddGroup(props) {
  const { classes } = props;

  return (
    <div className={classes.containerGroup}>
        <div style={{ gridColumnEnd: 'span 3' }}>
          <ImageAvatarsGroups />
        </div>
        <div style={{ gridColumnEnd: 'span 3', }} className="alignGridUser" >
          <ImageAvatarsGroups />
        </div>
        <div style={{ gridColumnEnd: 'span 3' }} className="alignGridUser">
          <ImageAvatarsGroups />
        </div>
        <div style={{ gridColumnEnd: 'span 3' }} className="alignGridUser">
          <ImageAvatarsGroups />
        </div>
        <div style={{ gridColumnEnd: 'span 3' }} className="alignGridUser">
          <ImageAvatarsGroups />
        </div>
    </div>
  );
}

AddGroup.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddGroup);