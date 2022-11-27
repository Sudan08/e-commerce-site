import React from 'react';
import NavBar from '../components/NavBar';
import Grids from '../components/Grids';
import Products from '../components/Products';
import Slider from '../components/Slider';

const Home = () => {
    return (
        <>
            <NavBar />
            <Grids />
            <Products />
            <Slider />
        </>
    );
};

export default Home;