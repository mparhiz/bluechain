import React from 'react';
import './User.css';
import UserModel from '../../core/models/user-model';
import Services from '../../core/services/Services';
import {
  Button,
  TextField,
  Grid,
  Paper,
} from "@material-ui/core";

const services = new Services();
let user = new UserModel;

class User extends React.Component {
  constructor() {
      super();
      this.state = { ...user };
  }

  handleChangePersonTextField = (event) => {
    this.setState({ 
      ...this.state,
      person: { 
        ...this.state.person,
        [event.target.name]: event.target.value
      }
    });
  }

  handleChangePersonAddressTextField = (event) => {
    this.setState({ 
      ...this.state,
      person: { 
        ...this.state.person,
        addressDetails: {
          ...this.state.person.addressDetails,
          [event.target.name]: event.target.value
        }
      }
    });
  }

  handleChangeBusinessTextField = (event) => {
    this.setState({ 
      ...this.state,
      business: { 
        ...this.state.business,
        [event.target.name]: event.target.value
      }
    });
  }

  handleChangeBusinessAddressTextField = (event) => {
    this.setState({ 
      ...this.state,
      business: { 
        ...this.state.business,
        addressDetails: {
          ...this.state.business.addressDetails,
          [event.target.name]: event.target.value
        }
      }
    });
  }

  handleSubmit = (event) => {
    services.onBoarding(this.state)
      .then(data => {
        console.log(data);
        alert('Onboard Customer succeeds!');
      })
      .catch(error => {
        console.error(error);
        alert(error['errorMessage']);
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
                    <form onSubmit={this.handleSubmit}>
                      <Grid item>
                        <h3>Person</h3>
                      </Grid>
                      <Grid container direction="column" spacing={2}>
                        <Grid item>
                          <Grid container spacing={3}>
                            <Grid item xs={4}>
                              <TextField
                                type="text"
                                label="Given Name"
                                fullWidth
                                name="givenName"
                                value={this.state.person.givenName}
                                onChange={this.handleChangePersonTextField}
                                required
                                autoFocus
                              />
                            </Grid>
                            <Grid item xs={4}>
                              <TextField
                                type="text"
                                label="Family Name"
                                fullWidth
                                name="familyName"
                                value={this.state.person.familyName}
                                onChange={this.handleChangePersonTextField}
                                required
                              />
                            </Grid>
                            <Grid item xs={4}>
                              <TextField
                                type="text"
                                label="Middle Name"
                                fullWidth
                                name="middleName"
                                value={this.state.person.middleName}
                                onChange={this.handleChangePersonTextField}
                              />
                            </Grid>                            
                          </Grid>
                        </Grid>
                        
                        <Grid item>
                          <Grid container spacing={3}>
                            <Grid item xs={4}>
                              <TextField
                                type="email"
                                label="Email"
                                fullWidth
                                name="email"
                                value={this.state.person.email}
                                onChange={this.handleChangePersonTextField}
                              />
                            </Grid>
                            <Grid item xs={4}>
                              <TextField
                                type="text"
                                label="Mobile"
                                fullWidth
                                name="mobile"
                                value={this.state.person.mobile}
                                onChange={this.handleChangePersonTextField}
                                required
                              />
                            </Grid>
                            <Grid item xs={4}>
                              <TextField
                                type="date"
                                label="Date Of Birth"
                                fullWidth
                                name="dateOfBirth"
                                InputLabelProps={{
                                  shrink: true,
                                }}
                                value={this.state.person.dateOfBirth}
                                onChange={this.handleChangePersonTextField}
                              />
                            </Grid>                            
                          </Grid>
                        </Grid>

                        <Grid item>
                          <Grid item>
                            <h4>Address</h4>
                          </Grid>
                          <Grid container spacing={3}>
                            <Grid item xs={1}></Grid>
                            <Grid item xs={11}>
                              <TextField
                                type="text"
                                label="Address"
                                fullWidth
                                name="address"
                                value={this.state.person.addressDetails.address}
                                onChange={this.handleChangePersonAddressTextField}
                              />
                            </Grid>
                          </Grid>
                          <Grid container spacing={3}>
                            <Grid item xs={1}></Grid>
                            <Grid item xs={4}>
                              <TextField
                                type="text"
                                label="State"
                                fullWidth
                                name="state"
                                value={this.state.person.addressDetails.state}
                                onChange={this.handleChangePersonAddressTextField}
                              />
                            </Grid>
                            <Grid item xs={3}>
                              <TextField
                                type="text"
                                label="Postcode"
                                fullWidth
                                name="postcode"
                                value={this.state.person.addressDetails.postcode}
                                onChange={this.handleChangePersonAddressTextField}
                              />
                            </Grid>
                            <Grid item xs={4}>
                              <TextField
                                type="text"
                                label="Country Code"
                                fullWidth
                                name="countryCode"
                                value={this.state.person.addressDetails.countryCode}
                                onChange={this.handleChangePersonAddressTextField}
                              />
                            </Grid>                     
                          </Grid>
                        </Grid>
                      </Grid>

                      <Grid item>
                        <h3>Business</h3>
                      </Grid>
                      <Grid container direction="column" spacing={2}>
                        <Grid item>
                          <Grid container spacing={3}>
                            <Grid item xs={4}>
                              <TextField
                                type="text"
                                label="Legal Name"
                                fullWidth
                                name="legalName"
                                value={this.state.business.legalName}
                                onChange={this.handleChangeBusinessTextField}
                                required
                              />
                            </Grid>
                            <Grid item xs={4}>
                              <TextField
                                type="text"
                                label="Business Name"
                                fullWidth
                                name="businessName"
                                value={this.state.business.businessName}
                                onChange={this.handleChangeBusinessTextField}
                              />
                            </Grid>
                            <Grid item xs={4}>
                              <TextField
                                type="text"
                                label="Business Number"
                                fullWidth
                                name="businessNumber"
                                value={this.state.business.businessNumber}
                                onChange={this.handleChangeBusinessTextField}
                                required
                              />
                            </Grid>                            
                          </Grid>
                        </Grid>
                        
                        <Grid item>
                          <Grid container spacing={3}>
                            <Grid item xs={4}>
                              <TextField
                                type="text"
                                label="Phone Number"
                                fullWidth
                                name="phoneNumber"
                                value={this.state.business.phoneNumber}
                                onChange={this.handleChangeBusinessTextField}
                                required
                              />
                            </Grid>
                            <Grid item xs={4}>
                              <TextField
                                type="email"
                                label="Email"
                                fullWidth
                                name="email"
                                value={this.state.business.email}
                                onChange={this.handleChangeBusinessTextField}
                              />
                            </Grid>
                            <Grid item xs={4}>
                              <TextField
                                type="text"
                                label="Merchant Category Code"
                                fullWidth
                                name="merchantCategoryCode"
                                value={this.state.business.merchantCategoryCode}
                                onChange={this.handleChangeBusinessTextField}
                                required
                              />
                            </Grid>                            
                          </Grid>
                        </Grid>

                        <Grid item>
                          <Grid container spacing={3}>
                            <Grid item xs={12}>
                              <TextField
                                type="text"
                                label="Website"
                                fullWidth
                                name="url"
                                value={this.state.business.url}
                                onChange={this.handleChangeBusinessTextField}
                              />
                            </Grid>
                          </Grid>
                        </Grid>

                        <Grid item>
                          <Grid item>
                            <h4>Address</h4>
                          </Grid>
                          <Grid container spacing={3}>
                            <Grid item xs={1}></Grid>
                            <Grid item xs={11}>
                              <TextField
                                type="text"
                                label="Address"
                                fullWidth
                                name="address"
                                value={this.state.business.addressDetails.address}
                                onChange={this.handleChangeBusinessAddressTextField}
                                required
                              />
                            </Grid>
                          </Grid>
                          <Grid container spacing={3}>
                            <Grid item xs={1}></Grid>
                            <Grid item xs={4}>
                              <TextField
                                type="text"
                                label="State"
                                fullWidth
                                name="state"
                                value={this.state.business.addressDetails.state}
                                onChange={this.handleChangeBusinessAddressTextField}
                                required
                              />
                            </Grid>
                            <Grid item xs={3}>
                              <TextField
                                type="text"
                                label="Postcode"
                                fullWidth
                                name="postcode"
                                value={this.state.business.addressDetails.postcode}
                                onChange={this.handleChangeBusinessAddressTextField}
                                required
                              />
                            </Grid>
                            <Grid item xs={4}>
                              <TextField
                                type="text"
                                label="Country Code"
                                fullWidth
                                name="countryCode"
                                value={this.state.business.addressDetails.countryCode}
                                onChange={this.handleChangeBusinessAddressTextField}
                                required
                              />
                            </Grid>                     
                          </Grid>
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