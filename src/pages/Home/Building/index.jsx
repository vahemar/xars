import { Flex } from '@chakra-ui/react'
import React from 'react'
import { ReactComponent as Building1 } from '../../../assets/svg/location.svg'

function Building() {
  return (
    <Flex w={'full'} gap={2} direction={'row'} justify={'center'} align={'center'}>
        <Building />
    </Flex>
  )
}

export default Building