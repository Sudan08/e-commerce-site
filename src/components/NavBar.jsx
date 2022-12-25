// import {} from "react";

import { Box, Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Flex, HStack, Icon, List, ListItem, Text, useBreakpointValue, useColorMode, useDisclosure, VStack } from "@chakra-ui/react";
import {AiOutlineHeart , AiOutlineSearch ,AiOutlineShoppingCart ,AiOutlineMenu,AiOutlineClose} from 'react-icons/ai';
import {BsMoon, BsSun} from 'react-icons/bs';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const NavBar= ()=> {
    const isDesktop = useBreakpointValue({base:false,lg:true});
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { colorMode, toggleColorMode } = useColorMode();
     
    const Icons = () =>{
        const totalItems = useSelector((state)=>state.cart.totalItems);
        return <>
            <HStack  gap={'10px'}>
                <Icon as={AiOutlineSearch} h={'25px'} w={'25px'} />
                <Icon as={AiOutlineHeart} h={'25px'} w={'25px'} />
                <Link to={'/Cart'} >
                    <Icon as={AiOutlineShoppingCart} h={'25px'} w={'25px'} />
                </Link>
               
                <Flex bg={'rgba(122,122,122,0.3)'} borderRadius={'100%'} height='25px' width='25px' fontSize={'2xl'} justifyContent="center" alignItems={"center"} padding={'1'}>{totalItems}</Flex>
               
                {colorMode === "light"
                    ? (<Icon h={'25px'} w={'25px'} as={BsSun} onClick={toggleColorMode}></Icon>)
                    : (<Icon h={'25px'} w={'25px'} as={BsMoon} onClick={toggleColorMode}></Icon>)}
                
            </HStack>
        </>;
    };
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
