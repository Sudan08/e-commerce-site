import { Text, VStack } from '@chakra-ui/react';
import React from 'react';

import { useRouteError } from 'react-router-dom';

const Error = () => {
    const error = useRouteError();
    return (
        <>
            <VStack h={'100vh'} justifyContent={'center'} alignItems={'center'}>
                <Text fontSize={'6xl'}>{error.status}</Text>
                <Text fontSize={'6xl'}>{error.statusText}</Text>
            </VStack>
        </>
    );
};

export default Error;