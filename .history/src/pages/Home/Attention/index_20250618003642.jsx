import { Flex, Text } from '@chakra-ui/react'
import React from 'react'

function Attention() {
  return (
    <Flex mt={6} borderRadius={'5px'} p={4} maxW={'900px'} w={'full'} bg={'#882423'} direction={'column'} justify={'center'} align={'center'}>
        <a href='tel:099690808'>
        <Text textDecoration={'underline'} color={'#CACACA'} _hover={{color: 'white'}} transition={'0.2s'} textAlign={'center'} cursor={'pointer'}>ՀԱՅՏԱՐԱՐՈՒԹՅՈՒՆ՝ պահանջվում է ՍՐԱՀԻ ՀԱՎԱՔԱՐԱՐ, մինչև 35 տարեկանը, հեռ. 099 690808 </Text>
        </a>
    </Flex> 
  )
}

export default Attention