import { Box, HStack, Icon, Image, List, ListIcon, ListItem, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import {FaCircle} from 'react-icons/fa';
const Slider = () => {
    return (
        <Box position={'relative'} backgroundImage={'https://images.unsplash.com/photo-1537832816519-689ad163238b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=859&q=80'} backgroundRepeat={'no-repeat'} backgroundSize={"cover"} height={'100vh'}>
            <Box position={'absolute'} zIndex={10}>
                <VStack justifyContent={'center'} alignContent={'center'} width={'100vw'} height={'100vh'}>
                    <Box height={'50vh'} width={'80vw'} background='rgba(0,0,0,0.3)'>
                        <VStack justifyContent={'center'} alignItems={'center'} height={'50vh'} width={'80vw'}>
                            <Text fontSize={'5xl'}>The Project</Text>
                            <Text fontSize={'3xl'}>Lorem</Text>
                        </VStack>
                    </Box>
                    <Box background='rgba(0,0,0,0.3)'  padding={'5'} borderRadius={"6%"}>
                        <HStack justifyContent={'space-between'} width={'100px'}>
                          
                            <Icon as={FaCircle} color='black' _selected/>
                            <Icon as={FaCircle} />
                            <Icon as={FaCircle} />
                         
                        </HStack>
                    </Box>
                </VStack>
            </Box>
        </Box>
    );
};

export default Slider;