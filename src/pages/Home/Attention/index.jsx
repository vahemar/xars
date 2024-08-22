import { Flex, Text } from '@chakra-ui/react'
import React from 'react'

function Attention() {
  return (
    <Flex p={4} w={'full'} bg={'#882423'} direction={'column'} justify={'center'} align={'center'}>
        <a href='tel:099690808'>
        <Text textDecoration={'underline'} color={'#CACACA'} _hover={{color: 'white'}} transition={'0.2s'} cursor={'pointer'}>ՀԱՅՏԱՐԱՐՈՒԹՅՈՒՆ՝ պահանջվում է մանղալչի, հեռ. 099 690808 </Text>
        </a>
    </Flex> 
  )
}

export default Attention