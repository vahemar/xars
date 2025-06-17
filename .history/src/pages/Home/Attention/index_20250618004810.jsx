import { Flex, Text } from '@chakra-ui/react'
import React from 'react'

function Attention() {
  return (
    <Flex mt={6} borderRadius={'5px'} p={4} maxW={'1000px'} w={'full'} bg={'#882423'} direction={'column'} justify={'center'} align={'center'}>
        <a href='tel:099690808'>
        <Text color={'#E7E7E7'} _hover={{color: 'white'}} transition={'0.2s'} textAlign={'center'} cursor={'pointer'}>ՀԱՅՏԱՐԱՐՈՒԹՅՈՒՆ՝ պահանջվում է ՍՐԱՀԻ ՀԱՎԱՔԱՐԱՐ, ցանկալի է լինի երիտասարդ՝ աշխատանքը շատ է, մինչև 35 տարեկանը, հեռ. 099 690808 </Text>
        </a>
    </Flex> 
  )
}

export default Attention