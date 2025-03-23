import { Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import building3 from '../../../assets/png/xarslocation3.webp'
import building2 from '../../../assets/png/xarslocation1.webp'
import building1 from '../../../assets/png/xarslocation2.webp'

function Building() {
  return (
    <Flex  pr={4} pl={4} pb={12} pt={4} w={'full'} gap={10} direction={'column'} justify={'center'} align={'center'}>
      <Flex direction={'column'} align={'center'}>
        <Text fontWeight={500} fontSize={'30px'}>ՇԻՆՈՒԹՅՈՒՆԸ</Text>
          <Flex color={'#F3E6E6'} direction={'column'}>
            <a href='https://www.google.com/maps/place/%D5%82%D5%A1%D6%80%D5%BD+%D4%B9%D5%B8%D5%B6%D6%80%D5%A1%D5%BF%D5%B8%D6%82%D5%B6+(Ghars%2FXars+Tonratun)/@40.1804887,44.4458657,18.75z/data=!4m6!3m5!1s0x406abd003d524eeb:0xdcf01adc8feb5539!8m2!3d40.1804333!4d44.4461906!16s%2Fg%2F11lmjpf67j?entry=ttu'>
              <Text fontSize={'17px'} lineHeight={'6px'} fontWeight={500} _hover={{ color: 'black' }} color={'gray'} transition={'0.2s'}>Ղարս Թոնրատուն </Text>
            </a>
          </Flex>
      </Flex>
      <Flex wrap={'wrap'} justify={'center'} direction={'row'} gap={2} align={'center'}>
        <Image borderRadius={'10px'} src={building1} />
        <Image borderRadius={'10px'} src={building2} />
        <Image borderRadius={'10px'} src={building3} />
      </Flex>
    </Flex>
  )
}

export default Building