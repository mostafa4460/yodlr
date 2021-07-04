// Edit user component: rendered for '/:id' page

import {useEffect, useState} from 'react';
import {useHistory, useParams} from 'react-router-dom';
import {Paper, Typography, TextField, Button, CircularProgress} from '@material-ui/core';
import YodlrApi from '../api';
import './Edit.css';

const Edit = () => {
    const [form, setForm] = useState(null);
    const history = useHistory();
    const {id} = useParams();
    const handleChange = e => {
        const {name, value} = e.target;
        setForm(oldForm => ({...oldForm, [name]: value}));
    };
    const handleSubmit = async e => {
        e.preventDefault();
        await YodlrApi.updateUser(form);
        history.push('/admin');
    };
    useEffect(() => {
        async function fetchUser(id) {
            const user = await YodlrApi.getUser(id);
            setForm(user);
        }
        fetchUser(id);
    }, [id]);

    return form 
        ? <Paper className="Edit" elevation={10}>
            <form onSubmit={handleSubmit} className="Edit-form">
                <Typography variant="h3" color="primary">
                    Edit User
                </Typography>
                <TextField
                    className="Edit-input" 
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
                    className="Edit-input" 
                    id="firstName" 
                    label="First Name" 
                    variant="outlined"
                    name="firstName"
                    fullWidth
                    required
                    value={form.firstName}
                    onChange={handleChange} />
                <TextField
                    className="Edit-input" 
                    id="lastName" 
                    label="Last Name" 
                    variant="outlined"
                    name="lastName"
                    fullWidth
                    required
                    value={form.lastName}
                    onChange={handleChange} />
                <TextField
                    className="Edit-input" 
                    id="state" 
                    label="State" 
                    variant="outlined"
                    name="state"
                    fullWidth
                    required
                    value={form.state}
                    onChange={handleChange} />
                <Button 
                    color="primary" 
                    variant="contained"
                    type="submit">Save</Button>
                <Button 
                    color="secondary" 
                    variant="contained"
                    onClick={() => history.goBack()}>Cancel</Button>
            </form>
        </Paper>
        : <CircularProgress className="Edit-spinner" size={500} />
}

export default Edit;