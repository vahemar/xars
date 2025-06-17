import React from 'react'
import { Divider, Flex, Text } from '@chakra-ui/react'
import Workhours from './Workhours'
import Building from './Building'
import Delivery from './Delivery'
import Attention from './Attention'
import Location from './Location'

function Home() {
  return (
    <Flex p={2} gap={8} w={'full'} align={'center'} direction={'column'}>
      <Divider pt={8} w={'full'}  maxW={'2xl'} borderColor={'#9A9A9A'} />
      
      <Workhours />
      <Divider w={'full'} maxW={'2xl'} borderColor={'#9A9A9A'} />
      <Flex direction={'column'} w={'full'} align={'center'}>
        <Text fontWeight={500} fontSize={'25px'} pb={10}>Տեղանքը և Առաքումը տարածքում</Text>
        <Location />
      </Flex>
      <Divider w={'full'} borderColor={'#9A9A9A'} />
      <Building />
    </Flex>
  )
}

export default Home