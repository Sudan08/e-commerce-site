import { Box, Button, Flex, FormControl, Grid, GridItem, HStack, Icon, Input, Select, Spinner, Text, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import {AiOutlineSearch} from 'react-icons/ai';
import { NewProductsCards } from '../components/homeui/Cards';
// import { Fakedata } from '../fakeData/Fakedata';

import { useMemo } from 'react';
import fetchItems from '../components/customHooks/fetchItems';
import { useEffect } from 'react';
import { useQuery } from 'react-query';


const WomensPage = () => {
    // const {result:{data} , status } = useGetItems("items?filters[collection][$eq]=Women&populate=*");

    const {isLoading , data } = useQuery(['womendata'],()=>fetchItems("items?filters[collection][$eq]=Women&populate=*"));
    const [sort , setSort] = useState('');
    const [priceData , setPriceData] = useState({
        low: 0,
        high: 0,
    });

    
    const [submit , setSubmit] = useState(false);

    useEffect(()=>{
        setSubmit(false);
    },[priceData]);


    const womenItems = useMemo(()=>{
        if(sort === 'lh'){
            return data?.sort((a,b) => a.attributes.price - b.attributes.price);
        }
        else if(sort === 'hl'){
            return data?.sort((a,b) => b.attributes.price - a.attributes.price);
        }
        else if(submit === true){
            return data?.filter((item) => item?.attributes.price >= priceData.low && item?.attributes.price <= priceData.high);
           
        } 
        else{
            return data;
        }
    },[sort, submit, data, priceData.low, priceData.high]);

    const handleReset = () => {
        // eslint-disable-next-line no-unused-expressions, no-sequences
        setSort(""),
        setPriceData({low:0,high:0}),
        setSubmit(false);

    };
    return (
        <>
            <NavBar />
            <VStack>
                <HStack mt={'50px'} justifyContent={"space-between"} w={'100vw'} flexDirection={['column','column','row']} alignItems={'flex-start'}>
                    <VStack boxShadow={'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;'} width={"15w"} m={"5"} justifyContent={"center"} alignItems={"flex-start"}>
                        <Text fontWeight={"bold"} px={3} mt={1}>
                                Price
                        </Text>
                        <FormControl>
                            <HStack p={3}>
                                <Input type={"number"} onChange={(e) => {setPriceData({...priceData,low:e.target.value});}} value={priceData.low} name={"min"} placeholder='Min'/>
                                <Input type={"number"} onChange={(e) => {setPriceData({...priceData,high:e.target.value});}} value={priceData.high} name={"min"} placeholder='Max'/>
                                <Button type={"submit"} onClick={()=>{setSubmit(true);}}><Icon as={AiOutlineSearch}/></Button>
                            </HStack>
                        </FormControl>
                        <Flex width={"20vw"} justifyContent={"center"}>
                            <Button width={"15vw"} onClick={handleReset}>Reset</Button>
                        </Flex>
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
                    <VStack boxShadow={'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;'} width={"75vw"} m={"5"}>
                        <HStack justifyContent={"space-between"} width={'75vw'} m={'3'}>
                            <Text mx={5} fontSize={"2xl"}>Womens Cloths</Text>
                            <Select value={sort} width={"10vw"} mx={5} onChange={(e)=>setSort(e.target.value)} disabled={isLoading}>
                                <option hidden>Sort</option>
                                <option value={"lh"}>Low to High</option>
                                <option value={"hl"}>High to Low</option>
                            </Select>
                        </HStack>
                        {(isLoading)?(<Spinner size={"xl"}/>):(
                            <Grid templateColumns={['repeat(1,1fr)','repeat(2,1fr)','repeat(4,1fr)']}>
                                {womenItems?.length === 0?(<Text mx={4} fontSize={"5xl"}>Not found</Text>):(
                                    womenItems.map((data , index) =>(
                                        <GridItem key={index} colSpan={1}>
                                   
                                            <NewProductsCards id={data.id} name={data?.attributes.itemName} imgUrl={data.attributes?.itemImage?.data[0]?.attributes?.url} price={data?.attributes.price} />
                                       
                                        </GridItem>
                                    ))
                                )}
                            </Grid>
                        )}
                    </VStack>
                </HStack>
            </VStack>
        </>
    );
};

export default WomensPage;