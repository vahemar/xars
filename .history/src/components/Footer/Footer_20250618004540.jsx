import React from 'react'
import { Flex, Text, Image } from '@chakra-ui/react'
import xarsImage from '../../assets/svg/xarslogo.svg'
import instagramXars from '../../assets/svg/icon-social-isnatgram.svg'
import tiktokXars from '../../assets/svg/tiktok-icon.svg'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <Flex w={'full'}>
      <Flex w={'full'} display={['none', 'none', 'none', 'flex', 'flex']} align={'center'} gap={4} direction={'column'} justify={'center'} pb={6} pt={12}  bg={'#742726'}>
        <Flex direction={'column'} gap={'4px'} align={'center'} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} pointerEvents={'auto'} >
          <Image src={xarsImage} cursor={'pointer'} id='#home' width={'150px'} height={'150px'} fill='#FFF' stroke='#FFF' />
          <Text fontWeight={500} color={'white'} cursor={'pointer'} fontSize={'18px'}>Ղարս Թոնրատուն</Text>
        </Flex>
        <Flex align={'center'} direction={'column'}>
          <Flex lineHeight={'17px'} align={'center'} direction={'column'} gap={'4px'}>
            <a href='https://www.google.com/maps/place/%D5%82%D5%A1%D6%80%D5%BD+%D4%B9%D5%B8%D5%B6%D6%80%D5%A1%D5%BF%D5%B8%D6%82%D5%B6+(Ghars%2FXars+Tonratun)/@40.1804887,44.4458657,18.75z/data=!4m6!3m5!1s0x406abd003d524eeb:0xdcf01adc8feb5539!8m2!3d40.1804333!4d44.4461906!16s%2Fg%2F11lmjpf67j?entry=ttu'>
              <Text _hover={{ color: 'white' }} transition={'0.2s'} color={'#E7E7E7'}>Երևան, Օհանովի 9/7</Text>
            </a>
            <Flex color={'#E7E7E7'} direction={'column'} gap={2} pt={'2px'} align={'center'}>
              {/* <Text>Հեռախոսահամար.</Text> */}
              <Flex direction={'row'}gap={'4px'}>
              <a href='tel:+091730771'>
                <Text _hover={{ color: 'white' }} transition={'0.2s'} as='span'>091 730 771 /</Text>
              </a>
              <a href='tel:+093730771'>
                <Text _hover={{ color: 'white' }} transition={'0.2s'} as='span'>093 730 771</Text>
              </a>
              </Flex>
            
            </Flex>
          </Flex>
          <Flex pt={4} gap={2}>
            <Image src={tiktokXars} width={'30px'} height={'30px'} cursor={'pointer'} onClick={() => window.open('https://www.tiktok.com/@xarstonratun', '_blank')}/>
            <Image src={instagramXars} width={'30px'} height={'30px'} cursor={'pointer'} onClick={() => window.open('https://www.instagram.com/xarstonratun', '_blank')}/>
          </Flex>
          <Flex pt={2}>
            <Link href>
            <Text color={'#E7E7E7'} _hover={{ color: 'white' }} cursor={'pointer'} transition={'0.2s'} as={'span'}>info@xars.am</Text>
            </Link>
          </Flex>
        </Flex>
      </Flex>
      <Flex w={'full'} display={['flex', 'flex', 'flex', 'none', 'none']} align={'center'} gap={4} direction={'column'} justify={'center'} pr={6} pl={4} pb={6} pt={8} bg={'#742726'}>
      <Flex direction={'column'} gap={'4px'} align={'center'} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} pointerEvents={'auto'} >
          <Image src={xarsImage} cursor={'pointer'} id='#home' width={'120px'} height={'120px'} fill='#FFF' stroke='#FFF' />
          <Text fontWeight={500} color={'white'} cursor={'pointer'} fontSize={'18px'}>Ղարս Թոնրատուն</Text>
        </Flex>
        <Flex align={'center'} direction={'column'}>
          <Flex lineHeight={'17px'} align={'center'} direction={'column'} gap={2}>
            <a href='https://www.google.com/maps/place/%D5%82%D5%A1%D6%80%D5%BD+%D4%B9%D5%B8%D5%B6%D6%80%D5%A1%D5%BF%D5%B8%D6%82%D5%B6+(Ghars%2FXars+Tonratun)/@40.1804887,44.4458657,18.75z/data=!4m6!3m5!1s0x406abd003d524eeb:0xdcf01adc8feb5539!8m2!3d40.1804333!4d44.4461906!16s%2Fg%2F11lmjpf67j?entry=ttu'>
              <Text _hover={{ color: 'white' }} transition={'0.2s'} color={'#E7E7E7'}>Երևան, Օհանովի 9/7</Text>
            </a>
            <Flex color={'#E7E7E7'} direction={'column'} gap={'2px'} align={'center'} justify={'center'}>
              <a href='tel:+091730771'>
                <Text _hover={{ color: 'white' }} transition={'0.2s'} as='span'>091 730 771 </Text>
              </a>
              <a href='tel:+093730771'>
                <Text _hover={{ color: 'white' }} transition={'0.2s'} as='span'>093 730 771</Text>
              </a>
            </Flex>
          </Flex>
          <Flex pt={4} direction='row' gap={2} align={'center'}>
          <Image src={tiktokXars} width={'30px'} height={'30px'} cursor={'pointer'} onClick={() => window.open('https://www.tiktok.com/@xarstonratun', '_blank')}/>
            <Image src={instagramXars} width={'30px'} height={'30px'} cursor={'pointer'} onClick={() => window.open('https://www.instagram.com/xarstonratun', '_blank')}/>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Footer