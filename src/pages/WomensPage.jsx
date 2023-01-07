import { Box, Button, Grid, GridItem, HStack, Icon, Input, Select, Text, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import {AiOutlineSearch} from 'react-icons/ai';
import { NewProductsCards } from '../components/homeui/Cards';
// import { Fakedata } from '../fakeData/Fakedata';
import { useEffect } from 'react';
import { useMemo } from 'react';
import useGetItems from '../components/customHooks/useGetItems';

const WomensPage = () => {
    const {result:{data}} = useGetItems("mendatas");
    const [sort , setSort] = useState('');
    
    const itemData = useMemo(()=>{
        if(sort === 'lh'){
            return data.sort((a,b) => a.price - b.price);
        }
        else if(sort === 'hl'){
            return data.sort((a,b) => b.price - a.price);
        }
        else{
            return data;
        }
    },[sort]);

    return (
        <>
            <NavBar />
            <VStack>
                <HStack mt={'50px'} justifyContent={"space-between"} w={'100vw'} flexDirection={['column','column','row']} alignItems={'flex-start'}>
                    <VStack boxShadow={'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;'} width={"15w"} m={"5"}>
                        <VStack alignItems={'flex-start'}>
                            <Text fontWeight={"bold"} px={3} mt={1}>
                                Price
                            </Text>
                            <HStack p={3}>
                                <Input placeholder='Min'/>
                                <Input placeholder='Max'/>
                                <Button><Icon as={AiOutlineSearch}/></Button>
                            </HStack>
                            <Text fontWeight={"bold"} px={3}>
                                Category
                            </Text>
                            <Select p={3}>
                                <option hidden>Select Category</option>
                                <option>Pants</option>
                                <option>Boots</option>
                                <option>Shirt</option>
                                <option>Saree</option>
                            </Select>
                        </VStack>
                    </VStack>
                    <VStack boxShadow={'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;'} width={"75vw"} m={"5"}>
                        <HStack justifyContent={"space-between"} width={'75vw'} m={'3'}>
                            <Text mx={5} fontSize={"2xl"}>Womens Cloths</Text>
                            <Select value={sort} width={"10vw"} mx={5} onChange={(e)=>setSort(e.target.value)}>
                                <option hidden>Sort</option>
                                <option value={"lh"}>Low to High</option>
                                <option value={"hl"}>High to Low</option>
                            </Select>
                        </HStack>
                        <Grid templateColumns={['repeat(1,1fr)','repeat(2,1fr)','repeat(4,1fr)']}>
                         
                            {data.map((data , index) => (
                                <GridItem key={index} colSpan={1}><NewProductsCards id={data.id} name={data.name} imgUrl={data.imgUrl} price={data.price} /></GridItem>
                        
                            ))}
                        </Grid>
                    </VStack>
                </HStack>
            </VStack>
        </>
    );
};

export default WomensPage;