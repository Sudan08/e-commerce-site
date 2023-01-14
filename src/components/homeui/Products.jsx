import { Box, Grid, GridItem, Heading, HStack, List, ListItem, Spinner, Stack, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { NewProductsCards } from './Cards';
// import { Fakedata } from '../../fakeData/Fakedata';
import { useSelector } from 'react-redux';
import fetchItems from '../customHooks/fetchItems';
import { useQuery } from 'react-query';

const Products = () => {
    const CartItems = useSelector((state)=> state.cart.itemList);
    // const {result : {data} , status} = useGetItems("items?populate=*");


    const { isloading , data } = useQuery(['productdata'],()=>fetchItems('items?populate=*'));
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
                {isloading?(<Spinner size={"xl"} m={10}/>):(
                    <Grid templateColumns={['repeat(1,1fr)','repeat(2,1fr)','repeat(4,1fr)']}>
                        {data?.map((data , index) => (
                            <GridItem key={index} colSpan={1}><NewProductsCards id={data.id} name={data?.attributes.itemName} imgUrl={data.attributes?.itemImage?.data[0]?.attributes?.url} price={data?.attributes.price} /></GridItem>
                            
                        ))}
                    </Grid>
                )}
            </Box>
        </VStack>
    );
};

export default Products;