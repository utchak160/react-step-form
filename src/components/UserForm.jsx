import React, { useState } from 'react';
import UserDetailForm from './UserDetailForm';
import UserPersonalForm from './UserPersonalForm';
import UserVerifyDetail from './UserVerifyDetail';
import Success from './Success';

const UserForm = () => {

    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        occupation: '',
        address: '',
    });
    const [step, setStep] = useState(1);

    const next = (e) => {
        setStep((prevState) => prevState + 1);
    };

    const previous = (e) => {
        setStep((prevState) => prevState - 1);
    };

    const handleChange = (input) => (e) => {
        e.preventDefault();
        setValues(prevState => ({
            ...prevState,
            [input]: e.target.value,
        }));
    };

    switch (step) {
        case 1:
            return <UserDetailForm values={values} handleChange={handleChange} next={next} />;
        case 2:
            return <UserPersonalForm values={values} handleChange={handleChange} next={next} previous={previous} />;
        case 3:
            return <UserVerifyDetail />;
        case 4:
            return <Success />;
        default:
            return <UserDetailForm values={values} handleChange={handleChange} next={next}/>;
    }
};

export default UserForm;
