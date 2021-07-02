// Signup component: rendered for '/signup' page

import {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {Paper, Typography, TextField, Button} from '@material-ui/core';
import YodlrApi from '../api';
import './Signup.css';

const Signup = () => { 
    const INITIAL_STATE = {email: "", firstName: "", lastName: ""};
    const [form, setForm] = useState(INITIAL_STATE);
    const history = useHistory();
    const handleChange = e => {
        const {name, value} = e.target;
        setForm(oldForm => ({...oldForm, [name]: value}));
    }
    const handleSubmit = async e => {
        e.preventDefault();
        try {
            await YodlrApi.signUpUser(form);
            history.push('/admin');
        } catch(err) {
            history.push('/error');
        }
    }

    return (
        <Paper className="Signup" elevation={10}>
            <form onSubmit={handleSubmit} className="Signup-form">
                <Typography variant="h3" color="primary">
                    Signup
                </Typography>
                <TextField
                    className="Signup-input" 
                    id="email" 
                    label="Email" 
                    variant="outlined"
                    type="email"
                    name="email"
                    fullWidth
                    required
                    value={form.email}
                    onChange={handleChange} />
                <TextField
                    className="Signup-input" 
                    id="firstName" 
                    label="First Name" 
                    variant="outlined"
                    name="firstName"
                    fullWidth
                    required
                    value={form.firstName}
                    onChange={handleChange} />
                <TextField
                    className="Signup-input" 
                    id="lastName" 
                    label="Last Name" 
                    variant="outlined"
                    name="lastName"
                    fullWidth
                    required
                    value={form.lastName}
                    onChange={handleChange} />
                <Button 
                    color="primary" 
                    variant="contained"
                    type="submit">Signup</Button>
                <Button 
                    color="secondary" 
                    variant="contained"
                    onClick={() => history.goBack()}>Cancel</Button>
            </form>
        </Paper>
    );
}

export default Signup;