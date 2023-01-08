import { Box, Button, HStack, Icon, Image, Spinner, Text, useToast, VStack } from '@chakra-ui/react';
import React from 'react';
import { BASEURL } from '../api/api';
import useGetItems from './customHooks/useGetItems';
import { GrFormPreviousLink , GrFormNextLink} from "react-icons/gr";
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../store/CartSlicer';

const ItemCard = ({id}) => {
    id = parseInt(id);
    const {result :{data} , status} = useGetItems("items/"+id+"?populate=*");

    const item = {
        name: data?.attributes?.itemName,
        price: data?.attributes?.price,
        url: data?.attributes?.itemImage?.data[0]?.attributes?.url,
    };

    const toast = useToast();
    const dispatch = useDispatch();
    const CartItems = useSelector((state)=> state.cart.itemList);
    const handleAddToCart = () => {
        const existingItem = CartItems.find((item) => item.id === id);
     
        if(existingItem){
            toast({
                position: 'bottom-right',
                status:'warning',
                title: "Item already in cart",
                description :"You can add more quantity from cart",
                isClosable: true,
            });
        }else{
            console.log(item);
            dispatch(cartActions.addToCart({
                id,
                name : item.name,
                price : item.price,
                imgUrl : item.url,
            }));
            toast({
                position: 'bottom-right',
                status:'success',
                title: "Item added in cart",
                description :"You can add more quantity from cart",
                isClosable: true,
            });
      
        }
        
    };

    return (
        <Box width={"100vw"} height={"90vh"} display={"flex"} justifyContent={"center"} alignItems={"center"} mt={5}>
            <HStack justifyContent={"space-between"}>
                {id > 0?<Button><Icon as={GrFormPreviousLink}></Icon></Button>:<></>}
                <Box p={5} boxShadow={"rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;"} w={"auto"} h={"auto"}>
                    {status === "Loading"?(<Spinner size={"xl"}/>):(
                        <HStack m={5} gap={10}>
                            <Box>
                                <Image src={BASEURL+item.url} height={"450px"} width={"300px"}></Image>
                            </Box>
                            <VStack justifyContent={"flex-start"} h={"450px"}>
                                <Text fontSize={"5xl"}>{item.name}</Text>
                                <VStack justifyContent={"center"} h={"300px"}>
                                    <Text fontSize={"2xl"}>{data?.attributes.description}</Text>
                                    <Text>${item.price}</Text>
                                </VStack>
                                <Button onClick={handleAddToCart} id={id}>Add to Cart</Button>
                            </VStack>
                        </HStack>
                    )}
                </Box>
                <Button><Icon as={GrFormNextLink} /></Button>
            </HStack>
        </Box>
    );
};

export default ItemCard;