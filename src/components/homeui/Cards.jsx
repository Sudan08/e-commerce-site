import { Box, Button, Card, CardBody, CardFooter, CardHeader, Heading, HStack, Icon, Image, Text, Toast, useToast, VStack } from "@chakra-ui/react";
import { useEffect } from "react";

import {useDispatch , useSelector} from 'react-redux';
import {cartActions} from "../../store/CartSlicer";
import { BASEURL } from "../../api/api";
import { Link } from "react-router-dom";

const HomeCard = (props) =>{
    return <>
        <Card h={'100%'}>
            <CardBody backgroundImage={'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'} backgroundRepeat={'no-repeat'} backgroundSize={'cover'}>
                <HStack justifyContent={'center'} alignItems={'center'} height={'100%'}>
                    <Box>
                        <Heading size='md'>{props.heading}</Heading>
                        <Text py='2'>
                        Caffè latte is a coffee beverage of Italian origin made with espresso
                        and steamed milk.
                        </Text>
                    </Box> 
                </HStack>
            </CardBody>

        </Card>
    </>;
};

const NewProductsCards =({imgUrl,name,id,price}) =>{    
    const toast = useToast();
    const dispatch = useDispatch();
    const CartItems = useSelector((state)=> state.cart.itemList);
    const handleAddToCart = () => {
        const existingItem = CartItems.find((item) => item.id === id);
     
        if(existingItem){
            toast({
                position: 'bottom-right',
                status:'warning',
                title: "Item already in cart",
                description :"You can add more quantity from cart",
                isClosable: true,
            });
        }else{
            dispatch(cartActions.addToCart({
                id,
                name,
                price,
                imgUrl,
            }));
            toast({
                position: 'bottom-right',
                status:'success',
                title: "Item added in cart",
                description :"You can add more quantity from cart",
                isClosable: true,
            });
      
        }
        
    };

    return <>
        <Card bg={'transparent'} id={id}>
            <Link to={`/item/${id}`}>
                <CardHeader>
                    <Image src={BASEURL+imgUrl} alt="img" height={["200px","350px","450px"]} onMouseOver={()=>{return null;}}/>
                </CardHeader>
            </Link>
            <CardFooter justifyContent={'center'} alignItems={'center'} flexDirection={'column'} gap={'2'}> 
                <Text>{name}</Text>
                <Text fontFamily={'sans-serif'}>$ {price}</Text>
                <Button onClick={handleAddToCart} id={id}>Add to cart</Button>
            </CardFooter>
        </Card>
    </>;
};



export {NewProductsCards};
export default HomeCard;