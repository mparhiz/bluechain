import React from 'react';
import './User.css';
import Services from '../../core/services/Services';
import {
  Button,
  TextField,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";

const services = new Services();

class User extends React.Component {
  constructor() {
      super();
      this.state = {
          givenName: '',
          familyName: '',
          fullName: '',
          middleName: '',
          email: '',

      }
  }
  
  handleSubmit = (event) => {
    services.onBoarding(this.state)
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error(error);
      });

    event.preventDefault();
  }

  render() {
      return (
        <>
          <Grid container spacing={0} justify="center" direction="row">
            <Grid item>
              <Grid
                container
                direction="column"
                justify="center"
                spacing={2}
                className="user-form"
              >
                <Paper
                  variant="elevation"
                  elevation={2}
                  className="user-background"
                >
                  <Grid item>
                    <Typography component="h2" variant="h5">
                      Onboard Customer
                  </Typography>
                  </Grid>
                  <Grid item>
                    <form onSubmit={this.handleSubmit}>
                      <Grid container direction="column" spacing={2}>
                        <Grid item>
                          <TextField
                            type="text"
                            placeholder="Given Name"
                            fullWidth
                            name="givenName"
                            variant="outlined"
                            value={this.state.givenName}
                            required
                            autoFocus
                          />
                        </Grid>
                        <Grid item>
                          <TextField
                            type="text"
                            placeholder="Family Name"
                            fullWidth
                            name="familyName"
                            variant="outlined"
                            value={this.state.familyName}
                            required
                          />
                        </Grid>
                        <Grid item>
                          <TextField
                            type="email"
                            placeholder="Email"
                            fullWidth
                            name="email"
                            variant="outlined"
                            value={this.state.email}
                            required
                          />
                        </Grid>
                      <Grid item>
                      <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        className="button-block"
                      >
                        Submit
                      </Button>
                      </Grid>
                      </Grid>
                    </form>
                  </Grid>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </>
      )
  }
};

export default User;