import React from 'react'
import { Flex } from '@chakra-ui/react'
import Workhours from './Workhours'

function Home() {
  return (
    <Flex w={'full'} direction={'column'}>
      <Workhours />
    </Flex>
  )
}

export default Home