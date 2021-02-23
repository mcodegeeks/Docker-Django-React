import { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
  Box,
  Card, 
  CardMedia,
  CardContent,
  Typography,
} from '@material-ui/core';
import bg from '../assets/images/bg.png';

const useStyles = (theme) => ({
  root: {
    width: '100%',
  },
  media: {
    height: 160,
  },
});

class AboutPage extends Component {
  componentDidMount() {
    if (this.props.setTitle)
      this.props.setTitle('About');
  }

  render() {
    const { classes } = this.props;

    return (
      <Box className={classes.root}>
        <Card>
          <CardMedia 
            className={classes.media}
            title="Coffee and Laptop"
            image={bg}
          />
          <CardContent>
            <Typography variant="h5">
              About
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              The page is under construction
            </Typography>
          </CardContent>
        </Card>
      </Box>
    );
  }
}

export default withStyles(useStyles)(AboutPage);
