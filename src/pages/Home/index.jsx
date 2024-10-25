import React from 'react'
import { Divider, Flex } from '@chakra-ui/react'
import Workhours from './Workhours'
import Building from './Building'
import Delivery from './Delivery'
import Attention from './Attention'

function Home() {
  return (
    <Flex p={2} gap={8} w={'full'} align={'center'} direction={'column'}>
      {/* <Attention /> */}
      {/* <Divider w={'full'}  borderColor={'#9A9A9A'} /> */}
      <Workhours />
      <Divider w={'full'}  borderColor={'#9A9A9A'} />
      <Building />
      <Divider w={'full'}  borderColor={'#9A9A9A'} />
      <Delivery />
    </Flex>
  )
}

export default Home