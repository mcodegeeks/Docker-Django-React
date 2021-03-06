import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Card, CardMedia, CardContent, Typography } from '@material-ui/core';
import { Page } from '../components';
import ExampleList from './examples/ExampleList';
import bg from '../assets/images/bg.png';

const styles = (theme) => ({
  root: {
    /*border: '1px solid red',*/
    padding: theme.spacing(1),
  },
  media: {
    height: 160,
  },
  margin: {
    marginTop: theme.spacing(2),
  },
});

class HomePage extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <Page className={classes.root} title="Home">
        <Card>
          <CardMedia 
            className={classes.media}
            title="Coffee and Laptop"
            image={bg}
          />
          <CardContent>
            <Typography variant="h5">
              Home
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              The page is under construction
            </Typography>
          </CardContent>
        </Card>        
        <Card className={classes.margin}>
          <CardContent>
            <Typography variant="h5">
              Learning examples:
            </Typography>
            <ExampleList />
          </CardContent>
        </Card>
      </Page>
    );
  }
}

export default withStyles(styles)(HomePage);
