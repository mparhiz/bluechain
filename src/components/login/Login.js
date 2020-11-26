import { React, useState }  from 'react';
import { useHistory } from "react-router-dom";
import './Login.css';
import Services from '../../core/services/Services';

import {
  Button,
  TextField,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";

const services = new Services();

function Login() {
  const [username, setUsername] = useState("TestUserDemo");
  const [password, setPassword] = useState("@Password_1234");
  let history = useHistory();

  const handleSubmit = (event) => {
    services.login(username, password)
      .then(data => {
        console.log(data);
        history.push("/user");
      })
      .catch(error => {
        console.error(error);
      });

    event.preventDefault();
  }
  
  return (
    <div>
      <Grid container spacing={0} justify="center" direction="row">
        <Grid item>
          <Grid
            container
            direction="column"
            justify="center"
            spacing={2}
            className="login-form"
          >
            <Paper
              variant="elevation"
              elevation={2}
              className="login-background"
            >
              <Grid item>
                <Typography component="h2" variant="h5">
                  Sign in
                </Typography>
              </Grid>
              <Grid item>
                <form onSubmit={handleSubmit}>
                  <Grid container direction="column" spacing={2}>
                    <Grid item>
                      <TextField
                        type="text"
                        placeholder="Username"
                        fullWidth
                        name="username"
                        variant="outlined"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        autoFocus
                      />
                    </Grid>
                    <Grid item>
                      <TextField
                        type="password"
                        placeholder="Password"
                        fullWidth
                        name="password"
                        variant="outlined"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
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
    </div>
  );
}

export default Login;
