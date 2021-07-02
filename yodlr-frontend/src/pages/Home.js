// Home component: rendered for '/' page

import {Typography} from '@material-ui/core';
import './Home.css';

const Home = () => (
    <div className="Home">
        <Typography variant="h1" color="primary">
            Yodlr take-home challenge
        </Typography>
    </div>
);

export default Home;