import { Box, HStack, Icon, Input, useColorMode } from "@chakra-ui/react";
import { useState } from "react";
import { AiOutlineHeart, AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { BsMoon, BsSun } from "react-icons/bs";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Icons = () =>{


    const [search,setSearch] = useState({
        clicked : false,
        searchTerm : '',
    });
    console.log(search);
    const { colorMode, toggleColorMode } = useColorMode();
    const totalItems = useSelector((state)=>state.cart.totalItems);


    return <>
        <HStack  gap={'10px'}>
            <Icon as={AiOutlineSearch} h={'25px'} w={'25px'} onClick={()=>setSearch(...search.clicked === true )}/>
            {search.clicked?<Input placeholder="Search..." onChange={(e)=>setSearch(...search.searchTerm === e.target.value)}/>:null}
            <Icon as={AiOutlineHeart} h={'25px'} w={'25px'} />
            <Link to={'/Cart'} >
                <Icon as={AiOutlineShoppingCart} h={'25px'} w={'25px'} />
            </Link>

            <Box className="cartNumber">
                {totalItems}
            </Box>
            
            <Link>
                {colorMode === "light"
                    ? (<Icon h={'25px'} w={'25px'} as={BsSun} onClick={toggleColorMode}></Icon>)
                    : (<Icon h={'25px'} w={'25px'} as={BsMoon} onClick={toggleColorMode}></Icon>)}
            </Link>
        </HStack>
    </>;
};

export default Icons;