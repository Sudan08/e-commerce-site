/* eslint-disable eqeqeq */
import { Box, Button, Center, Grid, GridItem, HStack, Icon, Image, Text, Toast, useToast, VStack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BsFillTrashFill } from 'react-icons/bs';
import { cartActions } from '../../store/CartSlicer';
import { BASEURL } from '../../api/api';

const Items = () => {
    const toast = useToast();
 
    const CartItem = useSelector((state)=> state.cart.itemList);
    const dispatch = useDispatch();

    const handleIncrement = (id) =>{
        if(id){
            dispatch(cartActions.increaseQuantity({
                id
            }));
        }else{
            console.log("error");
        }
    };
    const handleDecrement = (id) =>{
        if(id){
            CartItem.forEach(item => {
                console.log(item);
                if(item.id === id){
                    if(item.quantity > 1){
                        dispatch(cartActions.decreaseQuantity({
                            id
                        }));
                    }else{
                        toast({
                            position: 'bottom-right',
                            status:'error',
                            title: "Quantity can't be less than 1",
                            isClosable: true,
                        });
                    }
                }
            });
        
           
       
        }};
    const handleRemoveItem = (id) => {
        if(id){
            dispatch(cartActions.removeFromCart({
                id,
            }));
            toast({
                position: 'bottom-right',
                status:'success',
                title: "Item removed",
                isClosable: true,
            });
        }else{
            toast({
                position: 'bottom-right',
                status:'success',
                title: "Error removing",
                isClosable: true,
            });
        }
       
    };
    
    return(
        <>
            <Box padding={'50px'} boxShadow={'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;'} w={'60vw'}>
                {CartItem.length == 0?<Text>No items added</Text>:CartItem.map((item , index )=>{
                    console.log(item);
                    return(
                        <HStack key={index} marginTop="2rem" justifyContent={"space-between"}>
                            <Box h={'100px'} w={'100px'}>
                                <Image src={BASEURL+item.imgUrl} alt="img" height={'inherit'} onMouseOver={()=>{return null;}}/>
                            </Box>
                            <Box>
                                <VStack>
                                    <Text>{item.name}</Text>
                                    <Text>$ {item.price}</Text>
                                    <Text>No : {item.quantity}</Text>
                                </VStack>    
                            </Box>
                            <Box display={'flex'}  gap={2}>
                                <Button onClick={()=>handleIncrement(item.id)}>+</Button>
                                <Button onClick={()=>handleDecrement(item.id)}>-</Button>
                                <Button onClick={()=>handleRemoveItem(item.id)} ><Icon as={BsFillTrashFill}/></Button>

                            </Box>
                        </HStack>
                    );
                })}
                
           
            </Box>
        </>);
};

const CartItems = () => {
 
    const buyingItems = useSelector((state)=> state.cart.itemList);
    
    const total = buyingItems.reduce((total,item)=>total + item.totalPrice,0);
   
    return (
        <Box w={'100vw'} mt={'50px'} >
            <HStack justifyContent={'space-around'} alignItems={'center'}>
                <Box w={'auto'}>
                    <VStack 
                        alignItems="flex-start"
                        justifyContent="flex-start"
                    >
                        <Items />
                    </VStack>

                </Box>
                <Box w={'auto'}>
                    <VStack
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Box padding={'50px'} boxShadow={'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;'} w={'40vw'}>
                            {buyingItems.length == 0?<Text>No items added</Text>:
                                <>
                                    <VStack alignItems={"flex-start"} margin={3} >
                                        <HStack justifyContent={'space-between'} w={"32vw"}  borderBottom={'1px solid black'}>
                                            <Text fontSize={'2xl'}>Name</Text>
                                            <Text fontSize={'2xl'}>Quantity</Text>
                                            <Text fontSize={'2xl'}>Price</Text>
                                        </HStack>
                                    </VStack>
                                    {buyingItems.map((item , index)=>{
                                        return(
                                            <VStack alignItems={"flex-start"} key={index} margin={3}>
                                                {/* <HStack  justifyContent={'space-between'} w={"32vw"} >
                                                    <Text>{item.name}</Text>
                                                    <Text>{item.quantity}</Text>
                                                    <Text>${item.price}</Text> 
                                                </HStack> */}

                                                <Grid templateColumns={'repeat(3,1fr)'} w={"32vw"}>
                                                    <GridItem colSpan={1} justifySelf={"start"}>{item.name}</GridItem>
                                                    <GridItem colSpan={1} justifySelf={"center"}>{item.quantity}</GridItem>
                                                    <GridItem colSpan={1} justifySelf={"end"}>${item.price}</GridItem>
                                                </Grid>
                                        
                                            </VStack>
                                            
                                    
                                        );
                                    })}
                                    <Box alignItems={"flex-start"} display={"flex"} margin={3} borderTop={'1px solid black'}>
                                        <HStack justifyContent={'space-between'} w={"32vw"} >
                                            <Text fontSize={'2xl'} >Total:</Text>
                                            <Text>${total}</Text>         
                                        </HStack>
                                        
                                    </Box>
                                    <Box w={"32vw"} display={"flex"} alignItems={"center"} justifyContent={"center"}>
                                        <Button px={"10vw"}>Proceed to payment</Button>
                                    </Box>
                                </>
                            }
                        </Box>
                    </VStack>

                </Box>
            </HStack>
        </Box>
        
    );
};

export default CartItems;