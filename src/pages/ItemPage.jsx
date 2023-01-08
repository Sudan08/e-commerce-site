import React from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../components/NavBar';

const ItemPage = () => {
    const {id} = useParams();
    console.log(id);
    return (
        <>
            <NavBar />
        </>
    );
};

export default ItemPage;