import { Box, Button, HStack, Icon, Input, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import NavBar from '../components/NavBar';
import {AiOutlineSearch} from 'react-icons/ai';

const WomensPage = () => {
    return (
        <>
            <NavBar />
            <VStack>
                <HStack>
                    <VStack boxShadow={'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;'}>
                        <VStack>
                            <Text>
                                Price
                            </Text>
                            <HStack>
                                <Input placeholder='Min'/>
                                <Input placeholder='Max'/>
                                <Button><Icon as={AiOutlineSearch}/></Button>
                            </HStack>
                            
                        </VStack>
                    </VStack>
                    <VStack>
                        <></>
                    </VStack>
                </HStack>
            </VStack>
        </>
    );
};

export default WomensPage;