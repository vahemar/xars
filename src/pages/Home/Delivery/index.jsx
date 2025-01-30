import { Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import deliveryMap1 from '../../../assets/png/yerevanxars 1.webp'
import deliveryMap2 from '../../../assets/png/yerevanmalacyaxars 1.webp'

function Delivery() {
  return (
    <Flex w={'full'}>
      <Flex display={['none', 'none', 'none', 'flex', 'flex']} w={'full'} direction={'column'} align={'center'}>
        <Flex direction={'column'} align={'center'}>
          <Text fontWeight={500} fontSize={'30px'}>ԱՌԱՔՈՒՄ</Text>
          <Text fontWeight={500} fontSize={'20px'}>Առաքման վճարը՝ 500 դրամ</Text>
        </Flex>
        <Flex w={'full'} pt={10} pb={10} justify={'center'} direction={'row'} wrap={'wrap'} gap={2} align={'center'}>
          <Image src={deliveryMap1} borderRadius={'15px'} w={'680px'} h={'430px'} />
          <Image src={deliveryMap2} borderRadius={'15px'} w={'680px'} h={'430px'} />
        </Flex>
      </Flex>
      <Flex gap={6} p={0} w={'full'} direction={'column'} align={'center'} display={['flex', 'flex', 'flex', 'none', 'none']}>
        <Flex direction={'column'} align={'center'}>
          <Text fontWeight={500} fontSize={'30px'}>ԱՌԱՔՈՒՄ</Text>
          <Text fontWeight={500} fontSize={'20px'}>Առաքման վճարը՝ 500 դրամ</Text>
        </Flex>
        <Flex p={4} w={'full'} justify={'center'} direction={'row'} wrap={'wrap'} gap={2} align={'center'}>
          <Image src={deliveryMap1} borderRadius={'15px'} w={'auto'} h={'auto'} />
          <Image src={deliveryMap2} borderRadius={'15px'} w={'auto'} h={'auto'} />
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Delivery