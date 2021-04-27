import React, { useState } from 'react'

const UserForm = () => {

    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        occupation: '',
        address: ''
    });
    const [step, setStep] = useState(1);

    const next = (e) => {
        e.preventDefault();
        setStep((prevState) => prevState + 1);
    };

    const previous = (e) => {
        e.preventDefault();
        setStep((prevState) => prevState - 1);
    }

    const handleChange = (input) => (e) => {
        e.preventDefault();
        setValues(prevState => ({
            ...prevState,
            [input]: e.target.value
        }));
    }

    return (
        <div>

        </div>
    )
};

export default UserForm
