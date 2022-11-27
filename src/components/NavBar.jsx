import React from "react";

import { Box, Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Flex, Icon, List, ListItem, Text, useBreakpointValue, useColorMode, useDisclosure, VStack } from "@chakra-ui/react";
import {AiOutlineHeart , AiOutlineSearch ,AiOutlineShoppingCart ,AiOutlineMenu,AiOutlineClose} from 'react-icons/ai';
const NavBar= ()=> {
    const isDesktop = useBreakpointValue({base:false,lg:true});
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { colorMode, toggleColorMode } = useColorMode();
     
    const Icons = () =>{
        return <>
            <Box display={'flex'} gap={'10px'}>
                <Icon as={AiOutlineSearch} h={'25px'} w={'25px'} />
                <Icon as={AiOutlineHeart} h={'25px'} w={'25px'} />
                <Icon as={AiOutlineShoppingCart} h={'25px'} w={'25px'} />
                <Button onClick={toggleColorMode}>Toggle</Button>
            </Box>
        </>;
    };
    return (
        <VStack height={"100%"} width={"100%"}>
            <Box width={"100vw"} height={"10vh"}>
                <Flex alignItems={"center"} justifyContent={"space-between"}>
                    <Box margin={'20px'}>
                        <Text as="b" fontSize={"4xl"}>
                        .Destiny
                        </Text>
                    </Box>
                    {isDesktop?(
                        <>
                            <VStack>
                                <List display={'flex'} flexDirection={"row"} margin={'3px'} gap={'30px'} alignItems={'center'} fontSize={'20px'}>
                                    <ListItem>Home</ListItem>
                                    <ListItem>Women's</ListItem>
                                    <ListItem>Men's</ListItem>
                                    <ListItem>Shop</ListItem>
                                    <ListItem>Pages</ListItem>
                                    <ListItem>Blog</ListItem>
                                    <ListItem>Contact</ListItem>
                                </List>
                            </VStack>
                            <Box display={'flex'} mx={'25px'} gap={'10px'} alignItems={'center'}>
                                <Text>Login/Register</Text>
                                <Icons />
                            </Box>
                        </>
                    ):<>
                        <VStack mx={['0px','25px','50px']}>
                            <Button onClick={onOpen}> 
                                <Icon as={AiOutlineMenu} h={'25px'} w={'25px'}/>
                            </Button>
                            <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
                                <DrawerOverlay/>
                                <DrawerContent>
                                    <DrawerHeader display={'flex'} justifyContent={'center'}> 
                                        <Button onClick={onClose}><Icon as={AiOutlineClose} /></Button>
                                    </DrawerHeader>
                                    <DrawerBody>
                                        <VStack gap={'20px'}>
                                            <Icons/>
                                        
                                            <List display={'flex'} flexDirection={"column"} gap={'30px'} alignItems={'center'} fontSize={'20px'}>
                                                <ListItem>Home</ListItem>
                                                <ListItem>Women's</ListItem>
                                                <ListItem>Men's</ListItem>
                                                <ListItem>Shop</ListItem>
                                                <ListItem>Pages</ListItem>
                                                <ListItem>Blog</ListItem>
                                                <ListItem>Contact</ListItem>
                                            </List>
                                        </VStack>
                                    </DrawerBody>
                                </DrawerContent>

                            </Drawer>
                        </VStack>
                    </>}
                </Flex>
                
            </Box>
        </VStack>
    );
};

export default NavBar;
