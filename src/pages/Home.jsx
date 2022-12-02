import React from 'react';
import NavBar from '../components/NavBar';
import Grids from '../components/homeui/Grids';
import Products from '../components/homeui/Products';
import Slider from '../components/homeui/Slider';

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