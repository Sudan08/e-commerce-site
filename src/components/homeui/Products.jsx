import { Box, Grid, GridItem, Heading, HStack, List, ListItem, Stack, VStack } from '@chakra-ui/react';
import React from 'react';
import { NewProductsCards } from './Cards';
import { Fakedata } from '../../fakeData/Fakedata';
import { useSelector } from 'react-redux';

const Products = () => {
    const CartItems = useSelector((state)=> state.cart.itemList);
    return (
        <VStack>
            <Box width={'100vw'}>
                <Stack flexDirection={['column','column','row']} justifyContent={'space-around'}>
                    <Box>
                        <Heading>NewProducts</Heading>
                    </Box>
                    <Box>
                        <List>
                            <HStack>
                                <ListItem>All</ListItem>
                                <ListItem>Men</ListItem>
                                <ListItem>Women</ListItem>
                                <ListItem>Kids</ListItem>
                                <ListItem>Accescories</ListItem>
                                <ListItem>Cosmetic</ListItem>
                            </HStack>
                        </List>
                    </Box>
                </Stack>
            </Box>
            <Box>
                <Grid templateColumns={['repeat(1,1fr)','repeat(2,1fr)','repeat(4,1fr)']}>
                    {Fakedata.map((data , index) => (
                        
                        <GridItem key={index} colSpan={1}><NewProductsCards id={data.id} name={data.name} imgUrl={data.imgUrl} price={data.price} /></GridItem>
                        
                    ))}
                </Grid>
            </Box>
        </VStack>
    );
};

export default Products;