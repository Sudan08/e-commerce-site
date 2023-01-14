import { Button, Flex, FormControl, Grid, GridItem, HStack, Icon, Input, Select, Spinner, Text, VStack } from '@chakra-ui/react';
import React, { useEffect, useMemo, useReducer, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { useQuery } from 'react-query';
import fetchItems from '../components/customHooks/fetchItems';
import { NewProductsCards } from '../components/homeui/Cards';
import NavBar from '../components/NavBar';
import { reducer } from './WomensPage';


const MenPage = () => {
    // const {result:{data} , status} = useGetItems("items?filters[collection][$eq]=Men&populate=*");

    const [state ,dispatch] = useReducer(reducer,null);
    const {isLoading , data } = useQuery(['mendata'],()=>fetchItems("items?filters[collection][$eq]=Men&populate=*"));
    useEffect(()=>{
        if(isLoading === false){
            dispatch({type : 'init', payload : data});
        }
    },[isLoading]);

    
    const handlesort = (e)=>{
        if (e.target.value === "lh"){
            setSort('lh');
            dispatch({type: "lh"});
        }
        if (e.target.value === "hl"){
            setSort('hl');
            dispatch({type: "hl"});
        }
    };
    const [sort , setSort] = useState('');




    const [priceData , setPriceData] = useState({
        low: 0,
        high: 0,
    });
    
    

    const handleSubmit = () => {
        dispatch({type: "submit", payload: priceData});
    };
    
    const handleReset = () =>{
        dispatch({type:"init",payload:data});
        setPriceData({
            low:0,
            high:0,
        });
        setSort('');
    };
    
    

    



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
                            <FormControl>
                                <HStack p={3}>
                                    <Input type={"number"} onChange={(e) => {setPriceData({...priceData,low:e.target.value});}} value={priceData.low} name={"min"} placeholder='Min'/>
                                    <Input type={"number"} onChange={(e) => {setPriceData({...priceData,high:e.target.value});}} value={priceData.high} name={"min"} placeholder='Max'/>
                                    <Button type={"submit"} onClick={handleSubmit}><Icon as={AiOutlineSearch}/></Button>
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
                    </VStack>
                    <VStack boxShadow={'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;'} width={"75vw"} m={"5"}>
                        <HStack justifyContent={"space-between"} width={'75vw'} m={'3'}>
                            <Text mx={5} fontSize={"2xl"}>Men's Cloths</Text>
                            <Select width={"10vw"} mx={5} onChange={handlesort} disabled={isLoading}>
                                <option hidden>Sort</option>
                                <option value={"lh"}>Low to High</option>
                                <option value={"hl"}>High to Low</option>
                            </Select>
                        </HStack>
                        {isLoading?(<Spinner size={"xl"} />):(
                            <Grid templateColumns={['repeat(1,1fr)','repeat(2,1fr)','repeat(4,1fr)']}>
                                {state?.map((data , index) => (
                                    <GridItem key={index} colSpan={1}><NewProductsCards id={data.id} name={data?.attributes.itemName} imgUrl={data.attributes?.itemImage?.data[0]?.attributes?.url} price={data?.attributes.price} /></GridItem>
                            
                                ))}
                            </Grid>
                        )}
                    </VStack> 
                </HStack>
            </VStack>
        </>
    );
};

export default MenPage;