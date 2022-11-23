import { GridItem, VStack ,Grid} from '@chakra-ui/react';
import React from 'react';
import HomeCard from './Cards';




const Grids = () => {
    return (
        <VStack height={'90vh'} my={'5'}>
            <Grid templateColumns={['repeat(1,1fr)','repeat(2,1fr)','repeat(4,1fr)']} gap={'2'} h='90vh' w='100vw'>
                <GridItem rowSpan={2} colSpan={[1,2,2]}><HomeCard heading="Women's Fashion"/></GridItem>
                <GridItem colSpan={1} rowSpan={1}><HomeCard heading="Men's Fashion" /></GridItem>
                <GridItem colSpan={1} ><HomeCard heading="Kid's Fashion"/></GridItem>
                <GridItem colSpan={1} ><HomeCard heading="Cosmetics"/></GridItem>
                <GridItem colSpan={1} ><HomeCard heading='Accessories'/></GridItem>
            </Grid>
        </VStack>
    );
};

export default Grids;