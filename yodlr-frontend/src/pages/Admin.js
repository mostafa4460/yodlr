import {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {
    CircularProgress, 
    TableContainer, 
    Paper, 
    Table, 
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    IconButton
} from '@material-ui/core';
import {Edit, Delete} from '@material-ui/icons';
import YodlrApi from '../api';
import './Admin.css';

const Admin = () => {
    const [users, setUsers] = useState(null);
    const history = useHistory();
    useEffect(() => {
        async function getUsersFromAPI() {
            try {
                const userData = await YodlrApi.getUsers();
                setUsers(userData);
            } catch(err) {
                history.replace('/error');
            }
        }
        getUsersFromAPI();
    }, [history]);
    const deleteUser = async id => {
        await YodlrApi.deleteUser(id);
        setUsers(users => users.filter(user => user.id !== id));
    }; 

    return (
        <div className="Admin">
            {users
                ?   (
                        <TableContainer className="Admin-table" component={Paper}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>ID</TableCell>
                                        <TableCell>Email</TableCell>
                                        <TableCell>First Name</TableCell>
                                        <TableCell>Last Name</TableCell>
                                        <TableCell>State</TableCell>
                                        <TableCell>Actions</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {users.map(user => (
                                        <TableRow key={user.id}>
                                            <TableCell>{user.id}</TableCell>
                                            <TableCell>{user.email}</TableCell>
                                            <TableCell>{user.firstName}</TableCell>
                                            <TableCell>{user.lastName}</TableCell>
                                            <TableCell>{user.state}</TableCell>
                                            <TableCell>
                                                <IconButton 
                                                    onClick={() => history.push(`/${user.id}`)} 
                                                    color="primary"
                                                >
                                                    <Edit />
                                                </IconButton>
                                                <IconButton 
                                                    onClick={() => deleteUser(user.id)}
                                                    color="secondary"
                                                >
                                                    <Delete />
                                                </IconButton>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    )
                :   <CircularProgress size={500} />
            }
        </div>
    );
}

export default Admin;