import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const UserPersonalForm = ({ values: { occupation, address }, handleChange, next, previous }) => {
    const Continue = () => {
        next();
    };

    const Back = () => {
        previous();
    };

    return (
        <div>
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title='Enter User Personal Details'/>
                    <div className="form-container">
                        <TextField
                            value={occupation}
                            onChange={handleChange('occupation')}
                            defaultValue={occupation}
                            hintText='Enter your Occupation'
                        />
                        <br/>
                        <TextField
                            value={address}
                            onChange={handleChange('address')}
                            defaultValue={address}
                            hintText='Enter your Address'
                        />
                        <br/>
                        <br/>
                        <div>
                            <RaisedButton style={{ 'margin-right': '1.2rem' }} label='Back' onClick={Back}/>
                            <RaisedButton label='Continue' onClick={Continue} primary={true}/>
                        </div>
                    </div>
                </React.Fragment>
            </MuiThemeProvider>
        </div>
    );
};

export default UserPersonalForm;
