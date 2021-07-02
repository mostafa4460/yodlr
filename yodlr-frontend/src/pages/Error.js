import {Typography} from '@material-ui/core';
import './Error.css';
import sadFace from '../assets/img/error.png';

const Error = () => (
    <div className="Error">
        <img src={sadFace} alt="Sad face" />
        <Typography variant="h1" color="secondary">
            Something went wrong!
        </Typography>
    </div>
);

export default Error;