import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import RaisedButton from 'material-ui/RaisedButton';

const UserVerifyDetail = ({values, next, previous}) => {
    const Verify = () => {
        next();
    };

    const Back = () => {
        previous();
    };
    return (
        <MuiThemeProvider>
            <React.Fragment>
                <AppBar title={'Verify Details'} />
                <List>
                    <ListItem primaryText={'First Name'} secondaryText={values.firstName} />
                    <ListItem primaryText={'Last Name'} secondaryText={values.lastName} />
                    <ListItem primaryText={'Email'} secondaryText={values.email} />
                    <ListItem primaryText={'Occupation'} secondaryText={values.occupation} />
                    <ListItem primaryText={'Address'} secondaryText={values.address} />
                </List>
                <div>
                    <RaisedButton style={{ 'margin-right': '1.2rem' }} label='Back' onClick={Back}/>
                    <RaisedButton label='Verify' onClick={Verify} primary={true}/>
                </div>
            </React.Fragment>
        </MuiThemeProvider>
    );
};

export default UserVerifyDetail;
