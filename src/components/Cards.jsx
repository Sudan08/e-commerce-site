import { Box, Button, Card, CardBody, CardFooter, CardHeader, Heading, HStack, Icon, Image, Text, VStack } from "@chakra-ui/react";

import {useDispatch , useSelector} from 'react-redux';
import {cartActions} from "../store/CartSlicer";


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
   
    const dispatch = useDispatch();
    const addToCart = () =>{
        dispatch(cartActions.addToCart({
            id,
            name,
            price
        }));
    };
    return <>
        <Card bg={'transparent'} id={id}>
            <CardHeader>
                <Image src={imgUrl} alt="img" height={'400px'} onMouseOver={()=>{return null;}}/>
            </CardHeader>
            <CardFooter justifyContent={'center'} alignItems={'center'} flexDirection={'column'} gap={'2'}> 
                <Text>{name}</Text>
                <Text fontFamily={'sans-serif'}>$ {price}</Text>
                <Button onClick={addToCart} >Add to cart</Button>
            </CardFooter>
        </Card>
    </>;
};



export {NewProductsCards};
export default HomeCard;