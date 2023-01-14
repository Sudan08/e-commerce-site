// import {} from "react";


import { Box, Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Flex, Icon, List, ListItem, Text, useBreakpointValue, useDisclosure, VStack } from "@chakra-ui/react";
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai';
import Icons from '../components/homeui/Icons';
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
const NavBar= ()=> {
    const isDesktop = useBreakpointValue({base:false,lg:true});
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [selected , setSelected] = useState('Home');
    const location = useLocation;
    console.log(location.pathname);
     
    return (
        <VStack height={"100%"} width={"100%"}>
            <Box width={"100vw"} height={"10vh"}>
                <Flex alignItems={"center"} justifyContent={"space-between"}>
                    <Box margin={'20px'}>
                        <Link to={'/'}>
                            <Text as="b" fontSize={"4xl"}>
                            .Destiny
                            </Text>
                        </Link>
                    </Box>
                    {isDesktop?(
                        <>
                            <VStack>
                                <List display={'flex'} flexDirection={"row"} margin={'3px'} gap={'30px'} alignItems={'center'} fontSize={'20px'}>
                                    <Link to={'/'} >
                                        <ListItem value="home">Home</ListItem>
                                    </Link>
                                    <Link to={'/Women'} >
                                        <ListItem >Women's</ListItem>
                                    </Link>
                                    <Link to={'/Men'}>
                                        <ListItem>Men's</ListItem> 
                                    </Link>
                                    <ListItem>Shop</ListItem>
                                    <ListItem>Pages</ListItem>
                                    <ListItem>Blog</ListItem>
                                    <ListItem>Contact</ListItem>
                                </List>
                            </VStack>
                            <Box display={'flex'} mx={'25px'} gap={'10px'} alignItems={'center'}>
                                {localStorage.getItem('token')?<Text>{localStorage.getItem('userName')}</Text>:
                                    <>
                                        <Link to={"/Signup"}>
                                            <Text>Login/Register</Text>
                                        </Link>
                                       
                                    </>}
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
