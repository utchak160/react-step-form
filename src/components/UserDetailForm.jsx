import React from 'react';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

const UserDetailForm = ({ values: { firstName, lastName, email }, handleChange, next }) => {

    const Continue = () => {
        next();
    };
    return (
        <MuiThemeProvider>
            <React.Fragment>
                <AppBar title='Enter User Details'/>
                <div className="form-container">
                    <TextField
                        value={firstName}
                        onChange={handleChange('firstName')}
                        defaultValue={firstName}
                        hintText='Enter your First Name'
                    />
                    <br/>
                    <TextField
                        value={lastName}
                        onChange={handleChange('lastName')}
                        defaultValue={lastName}
                        hintText='Enter your Last Name'
                    />
                    <br/>
                    <TextField
                        value={email}
                        onChange={handleChange('email')}
                        defaultValue={email}
                        hintText='Enter your Email'
                    />
                    <br/>
                    <div>
                        <RaisedButton label='Continue' onClick={Continue} primary={true}/>
                    </div>
                </div>
            </React.Fragment>
        </MuiThemeProvider>
    );
};

export default UserDetailForm;
