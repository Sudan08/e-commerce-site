import { Box, Button, HStack, Image, Text, VStack } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';


const Items = () => {
    const CartItems = useSelector((state)=> state.cart.itemList);
    return<>
        <Box padding={'50px'} boxShadow={'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;'} w={'80vw'}>
            
            {CartItems.map((item , index )=>{
                console.log(item);
                return(
                    <HStack key={index}>
                        <Box flexGrow={1} h={'100px'} w={'100px'}>
                            <Image src={"https://i.pinimg.com/564x/cc/be/60/ccbe607ae6eabcdc6753ebb481158057.jpg"} alt="img" height={'inherit'} onMouseOver={()=>{return null;}}/>
                        </Box>
                        <Box flexGrow={2}>
                            <VStack>
                                <Text>{item.name}</Text>
                                <Text>{item.price}</Text>
                            </VStack>    
                        </Box>
                        <Box flexGrow={1}>
                            <Button>+</Button>
                            <Button>-</Button>
                        </Box>
                    </HStack>
                );
            })}
                
           
        </Box>
    </>;
};

const CartItems = () => {
    return (
        <Box w={'100vw'} mt={'50px'}>
            <HStack justifyContent={'center'} alignItems={'center'}>
                <Box w={'auto'}>
                    <VStack
                      
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Items />
                    </VStack>

                </Box>
                <Box w={'auto'}>
                    <VStack
                        alignItems="center"
                        justifyContent="center"
                    >
                        
                    </VStack>

                </Box>
            </HStack>
        </Box>
        
    );
};

export default CartItems;