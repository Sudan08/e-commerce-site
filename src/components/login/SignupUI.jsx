import { Box, Button, FormControl, FormLabel, HStack, Image, Input, Text, VStack } from '@chakra-ui/react';
import React from 'react';

const SignupUI = () => {
    return (
        <Box h={"100vh"} w={"100vw"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
            <Box boxShadow={"rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;"} h={"70vh"} w={"50vw"}>
                <HStack>
                    <Box>
                        <VStack w={"25vw"} h={"70vh"} justifyContent={"center"} alignItems={"center"}>
                            <Text>Login</Text>
                            <FormControl is isRequired>
                                <FormLabel as="email"></FormLabel>
                                <Input placeholder='Enter your email' />
                            </FormControl>
                            <Button >Login</Button>

                        </VStack>
                    </Box>
                    <Box>
                        <Image src="https://images.unsplash.com/photo-1670979313223-59d7225b3c1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" w={"25vw"} h={"70vh"} backgroundSize={'cover'} backgroundRepeat={"no-repeat"} backgroundPosition={"center"}/>
                    </Box>
                </HStack>
            </Box>
        </Box>
    );
};

export default SignupUI;

