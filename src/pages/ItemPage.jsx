import React from 'react';
import { useParams } from 'react-router-dom';
import ItemCard from '../components/ItemCard';
import NavBar from '../components/NavBar';

const ItemPage = () => {
    const {id} = useParams();
    return (
        <>
            <NavBar />
            <ItemCard id={id}/>
        </>
    );
};

export default ItemPage;