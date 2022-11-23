import { Box, Card, CardBody, CardFooter, CardHeader, Heading, HStack, Icon, Image, Text, VStack } from "@chakra-ui/react";

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

const NewProductsCards =(props) =>{
    return <>
        <Card bg={'transparent'}>
            <CardHeader>
                <Image src="https://images.unsplash.com/photo-1669111959281-7f4cdd990620?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="img" height={'400px'} onMouseOver={()=>{return null}}/>
            </CardHeader>
            <CardFooter justifyContent={'center'} alignItems={'center'} flexDirection={'column'} gap={'2'}> 
                <Text>Cotton T-Shirt</Text>
                <Icon></Icon>
                <Text fontFamily={'sans-serif'}>$ 48.5</Text>
            </CardFooter>
        </Card>
    </>;
};



export {NewProductsCards};
// eslint-disable-next-line import/no-anonymous-default-export
export default HomeCard;