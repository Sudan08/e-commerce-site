import { Button, Grid, GridItem, HStack, Icon, Input, Select, Spinner, Text, VStack } from '@chakra-ui/react';
import React, { useMemo, useState } from 'react';
import { useEffect } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import useGetItems from '../components/customHooks/useGetItems';
import { NewProductsCards } from '../components/homeui/Cards';
import NavBar from '../components/NavBar';


const MenPage = () => {
    const {result:{data} , status} = useGetItems("mendatas");
    const [sort , setSort] = useState('');
    

    

    const menItems = useMemo(()=>{
        if(sort === 'lh'){
            return data.sort((a,b) => a.attributes.price - b.attributes.price);
        }
        else if(sort === 'hl'){
            return data.sort((a,b) => b.attributes.price - a.attributes.price);
        }
        else{
            return data;
        }
    },[sort,data]);



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
                            <Text mx={5} fontSize={"2xl"}>Men's Cloths</Text>
                            <Select width={"10vw"} mx={5} onChange={(e)=>setSort(e.target.value)} disabled={status === "Loading"}>
                                <option hidden>Sort</option>
                                <option value={"lh"}>Low to High</option>
                                <option value={"hl"}>High to Low</option>
                            </Select>
                        </HStack>
                        {status === 'Loading'?(<Spinner size={"xl"} />):(
                            <Grid templateColumns={['repeat(1,1fr)','repeat(2,1fr)','repeat(4,1fr)']}>
                                {menItems?.map((data , index) => (
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