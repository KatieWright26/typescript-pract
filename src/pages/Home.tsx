import { Link } from 'react-router-dom';
import React from 'react';

const Home = () => (
    <>
        <h1>Home</h1>
        <Link to="/tweet">Tweets</Link>
        <Link to="select">Selector</Link>
    </>
);

export default Home;
