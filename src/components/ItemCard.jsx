import { Box, Button, HStack, Image, Spinner, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { BASEURL } from '../api/api';
import useGetItems from './customHooks/useGetItems';

const ItemCard = ({id}) => {

    const {result :{data} , status} = useGetItems("items/"+id+"?populate=*");

    return (
        <Box width={"100vw"} height={"90vh"} display={"flex"} justifyContent={"center"} alignItems={"center"} mt={5}>
            <Box p={5} boxShadow={"rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;"} w={"auto"} h={"auto"}>
                {status === "Loading"?(<Spinner size={"xl"}/>):(
                    <HStack m={5} gap={10}>
                        <Box>
                            <Image src={BASEURL+data.attributes?.itemImage?.data[0]?.attributes?.url} height={"450px"} width={"300px"}></Image>
                        </Box>
                        <VStack justifyContent={"flex-start"} h={"450px"}>
                            <Text fontSize={"5xl"}>{data?.attributes.itemName}</Text>
                            <VStack justifyContent={"center"} h={"300px"}>
                                <Text fontSize={"2xl"}>{data?.attributes.description}</Text>
                                <Text>${data?.attributes.price}</Text>
                            </VStack>
                            <Button>Add to Cart</Button>
                        </VStack>
                    </HStack>
                )}
            </Box>
        </Box>
    );
};

export default ItemCard;