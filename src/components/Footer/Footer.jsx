import React from 'react'
import { Flex, Text, Image } from '@chakra-ui/react'
import xarsImage from '../../assets/svg/xarslogo.svg'

function Footer() {
  return (
    <Flex w={'full'}>
      <Flex w={'full'} display={['none', 'none', 'none', 'flex', 'flex']} align={'center'} gap={4} direction={'column'} justify={'center'} pb={6} pt={8} mt={14} bg={'#6C2120'}>
        <Flex direction={'column'} gap={2} align={'center'} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} pointerEvents={'auto'} >
          <Image src={xarsImage} cursor={'pointer'} id='#home' width={'150px'} height={'150px'} fill='#FFF' stroke='#FFF' />
          <Text fontWeight={500} color={'white'} cursor={'pointer'} fontSize={'18px'}>Ղարս Թոնրատուն</Text>
        </Flex>
        <Flex align={'center'} direction={'column'}>
          <Flex lineHeight={'17px'} align={'center'} direction={'column'} gap={2}>
            <a href='https://www.google.com/maps/place/%D5%82%D5%A1%D6%80%D5%BD+%D4%B9%D5%B8%D5%B6%D6%80%D5%A1%D5%BF%D5%B8%D6%82%D5%B6+(Ghars%2FXars+Tonratun)/@40.1804887,44.4458657,18.75z/data=!4m6!3m5!1s0x406abd003d524eeb:0xdcf01adc8feb5539!8m2!3d40.1804333!4d44.4461906!16s%2Fg%2F11lmjpf67j?entry=ttu'>
              <Text _hover={{ color: 'white' }} transition={'0.2s'} color={'#D3D3D3'}>Հայաստան, Երևան, Օհանովի 9/7</Text>
            </a>
            <Flex color={'#D3D3D3'} direction={'row'} gap={2} align={'center'}>
              <Text>Հեռախոսահամար.</Text>
              <a href='tel:+010730771'>
                <Text _hover={{ color: 'white' }} transition={'0.2s'} as='span'>(010) 730 771 /</Text>
              </a>
              <a href='tel:+091730771'>
                <Text _hover={{ color: 'white' }} transition={'0.2s'} as='span'>(091) 730 771 /</Text>
              </a>
              <a href='tel:+093730771'>
                <Text _hover={{ color: 'white' }} transition={'0.2s'} as='span'>(093) 730 771</Text>
              </a>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Flex w={'full'} display={['flex', 'flex', 'flex', 'none', 'none']} align={'center'} gap={4} direction={'column'} justify={'center'} pr={6} pl={4} pb={6} pt={8} mt={14} bg={'#6C2120'}>
      <Flex direction={'column'} gap={2} align={'center'} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} pointerEvents={'auto'} >
          <Image src={xarsImage} cursor={'pointer'} id='#home' width={'150px'} height={'150px'} fill='#FFF' stroke='#FFF' />
          <Text fontWeight={500} color={'white'} cursor={'pointer'} fontSize={'18px'}>Ղարս Թոնրատուն</Text>
        </Flex>
        <Flex align={'center'} direction={'column'}>
          <Flex lineHeight={'17px'} align={'center'} direction={'column'} gap={2}>
            <a href='https://www.google.com/maps/place/%D5%82%D5%A1%D6%80%D5%BD+%D4%B9%D5%B8%D5%B6%D6%80%D5%A1%D5%BF%D5%B8%D6%82%D5%B6+(Ghars%2FXars+Tonratun)/@40.1804887,44.4458657,18.75z/data=!4m6!3m5!1s0x406abd003d524eeb:0xdcf01adc8feb5539!8m2!3d40.1804333!4d44.4461906!16s%2Fg%2F11lmjpf67j?entry=ttu'>
              <Text _hover={{ color: 'white' }} transition={'0.2s'} color={'#D3D3D3'}>Հայաստան, Երևան, Օհանովի 9/7</Text>
            </a>
            <Flex color={'#D3D3D3'} direction={'column'} gap={2} align={'center'} justify={'center'}>
              <Text>Հեռախոսահամար.</Text>
              <a href='tel:+010730771'>
                <Text _hover={{ color: 'white' }} transition={'0.2s'} as='span'>(010) 730 771 </Text>
              </a>
              <a href='tel:+091730771'>
                <Text _hover={{ color: 'white' }} transition={'0.2s'} as='span'>(091) 730 771 </Text>
              </a>
              <a href='tel:+093730771'>
                <Text _hover={{ color: 'white' }} transition={'0.2s'} as='span'>(093) 730 771</Text>
              </a>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Footer