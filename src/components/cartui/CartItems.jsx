/* eslint-disable eqeqeq */
import { Box, Button, HStack, Icon, Image, Text, Toast, useToast, VStack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BsFillTrashFill } from 'react-icons/bs';
import { cartActions } from '../../store/CartSlicer';

const Items = () => {
    const toast = useToast();
    const CartItems = useSelector((state)=> state.cart.itemList);
    const dispatch = useDispatch();
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
    // const handleIncrement =() =>{

    // };
    return<>
        <Box padding={'50px'} boxShadow={'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;'} w={'60vw'}>
            {CartItems.length == 0?<Text>No items added</Text>:CartItems.map((item , index )=>{
                return(
                    <HStack key={index} marginTop="2rem" justifyContent={"space-between"}>
                        <Box h={'100px'} w={'100px'}>
                            <Image src={"https://i.pinimg.com/564x/cc/be/60/ccbe607ae6eabcdc6753ebb481158057.jpg"} alt="img" height={'inherit'} onMouseOver={()=>{return null;}}/>
                        </Box>
                        <Box>
                            <VStack>
                                <Text>{item.name}</Text>
                                <Text>{item.price}</Text>
                            </VStack>    
                        </Box>
                        <Box display={'flex'}  gap={2}>
                            <Button onClick={"#"}>+</Button>
                            <Button>-</Button>
                            <Button onClick={handleRemoveItem(item.id)} ><Icon as={BsFillTrashFill}/></Button>

                        </Box>
                    </HStack>
                );
            })}
                
           
        </Box>
    </>;
};

const CartItems = () => {
    const [total,setTotal] = useState(0);
    const buyingItems = useSelector((state)=> state.cart.itemList);

   
    return (
        <Box w={'100vw'} mt={'50px'}>
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
                            <Text fontSize={'2xl'} borderBottom={'1px solid black'}>Total</Text>
                            {buyingItems.map((item , index)=>{
                                return(
                                    <VStack alignItems={"flex-start"} key={index} >
                                        <HStack  justifyContent={'space-between'} w={"30vw"} >
                                            <Text>{item.name}</Text>
                                            <Text>${item.price}</Text> 
                                        </HStack>
                                        <HStack justifyContent={'space-between'} w={"30vw"} >
                                            <Text>Total:</Text>
                                            <Text>{total}</Text>
                                            
                                        </HStack>
                                    </VStack>
                                    
                                );
                            })}
                        </Box>
                    </VStack>

                </Box>
            </HStack>
        </Box>
        
    );
};

export default CartItems;