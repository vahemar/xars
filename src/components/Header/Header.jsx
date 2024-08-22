import React, { useState, useEffect } from 'react'
import { Flex, Image, Text } from '@chakra-ui/react'
import xarsImage from '../../assets/svg/xarslogo.svg'
import callIcon from '../../assets/svg/call.svg'
import locationIcon from '../../assets/svg/location.svg'

function Header() {
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <Flex w={'full'}>
      <Flex display={['none', 'none', 'none', 'flex', 'flex']} w={'full'} direction={'column'}>
        <Flex align={'center'} justify={'center'} overflow={'hidden'} direction={'column'} pos={'relative'} w={'full'} h={'100vh'}>
          <video autoPlay muted loop playsInline style={{ width: '100%', height: '100%', position: 'absolute', zIndex: '-1', objectFit: 'cover', clipPath: 'inset(0 0 70px 0)' }}>
            <source src='/videos/videoplayback.mp4' type='video/mp4' />
          </video>
        </Flex>
        <Flex justify={'space-between'} color={'white'} pos={isSticky ? 'fixed' : 'absolute'} top={0} opacity={isSticky ? 0.5 : 1} transition={'0.5s ease'} w={'full'} bg={isSticky ? 'rgba(0, 0, 0, 0.7)' : 'transparent'} pb={4} pt={4} pr={8} pl={8}>
          <Flex direction={'row'} gap={2} align={'center'} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} pointerEvents={'auto'} >
            <Image src={xarsImage} cursor={'pointer'} id='#home' width={'75px'} height={'75px'} fill='#FFF' stroke='#FFF' />
            <Text fontWeight={500} cursor={'pointer'} fontSize={'18px'}>Ղարս Թոնրատուն</Text>
          </Flex>
          <Flex gap={6} pt={2} pb={2} pl={4} pr={4} direction={'row'} align={'center'} borderRadius={'11px'} bg={'#6C2120'}>
            <Image src={callIcon} stroke='#F3E6E6' fill='#F3E6E6' width={'20px'} height={'20px'} />
            <Flex lineHeight={'20px'} color={'#F3E6E6'} direction={'column'}>
              <a href='tel:+010730771'>
                <Text _hover={{ color: 'white' }} transition={'0.2s'} as='span'>(010) 730 771</Text>
              </a>
              <a href='tel:+091730771'>
                <Text _hover={{ color: 'white' }} transition={'0.2s'} as='span'>(091) 730 771</Text>
              </a>
              <a href='tel:+093730771'>
                <Text _hover={{ color: 'white' }} transition={'0.2s'} as='span'>(093) 730 771</Text>
              </a>
            </Flex>
            <Flex gap={4} direction={'row'} align={'center'}>
              <Image src={locationIcon} width={'30px'} height={'30px'} stroke='#FFF' fill='#FFF' />
              <Flex color={'#F3E6E6'} direction={'column'}>
                <a href='https://www.google.com/maps/place/%D5%82%D5%A1%D6%80%D5%BD+%D4%B9%D5%B8%D5%B6%D6%80%D5%A1%D5%BF%D5%B8%D6%82%D5%B6+(Ghars%2FXars+Tonratun)/@40.1804887,44.4458657,18.75z/data=!4m6!3m5!1s0x406abd003d524eeb:0xdcf01adc8feb5539!8m2!3d40.1804333!4d44.4461906!16s%2Fg%2F11lmjpf67j?entry=ttu'>
                  <Text _hover={{ color: 'white' }} transition={'0.2s'}>Օհանովի 9/7</Text>
                </a>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Flex display={['flex', 'flex', 'flex', 'none', 'none']} w={'full'}>
        <Flex align={'center'} justify={'center'} overflow={'hidden'} direction={'column'} pos={'relative'} w={'full'} h={'100vh'}>
          <video autoPlay muted loop playsInline style={{ width: '100%', height: '100%', position: 'absolute', zIndex: '-1', objectFit: 'cover', clipPath: 'inset(0 0 0 0)' }}>
            <source src='/src/assets/videos/videoplayback.mp4' type='video/mp4' />
          </video>
        </Flex>
        <Flex gap={6} justify={'space-between'} color={'white'} pos={isSticky ? 'fixed' : 'absolute'} top={0} opacity={isSticky ? 0.5 : 1} transition={'0.5s ease'} w={'full'} bg={isSticky ? 'rgba(0, 0, 0, 0.7)' : 'transparent'} pb={4} pt={4} pr={4} pl={4}>
          <Flex direction={'row'} gap={2} align={'center'} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} pointerEvents={'auto'} >
            <Image src={xarsImage} cursor={'pointer'} id='#home' width={'75px'} height={'75px'} fill='#FFF' stroke='#FFF' />
            <Text fontWeight={500} cursor={'pointer'} fontSize={'18px'}>Ղարս Թոնրատուն</Text>
          </Flex>
          {/* <Flex gap={2} pb={2} pt={2} pl={4} pr={4} direction={'row'} wrap={'wrap'} align={'center'} borderRadius={'11px'} bg={'#6C2120'}> */}
            {/* <Flex gap={2} direction={'column'} align={'center'}>
              <Image src={callIcon} stroke='#F3E6E6' fill='#F3E6E6' width={'20px'} height={'20px'} />
              <Flex textAlign={'center'} lineHeight={'20px'} color={'#F3E6E6'} direction={'column'}>
                <a href='tel:+010730771'>
                  <Text _hover={{ color: 'white' }} transition={'0.2s'} as='span'>(010) 730 771</Text>
                </a>
                <a href='tel:+091730771'>
                  <Text _hover={{ color: 'white' }} transition={'0.2s'} as='span'>(091) 730 771</Text>
                </a>
                <a href='tel:+093730771'>
                  <Text _hover={{ color: 'white' }} transition={'0.2s'} as='span'>(093) 730 771</Text>
                </a>
              </Flex>
            </Flex> */}
            {/* <Flex gap={4} direction={'row'} align={'center'}>
              <Image src={locationIcon} width={'30px'} height={'30px'} stroke='#FFF' fill='#FFF' />
              <Flex color={'#F3E6E6'} direction={'column'}>
                <a href='https://www.google.com/maps/place/%D5%82%D5%A1%D6%80%D5%BD+%D4%B9%D5%B8%D5%B6%D6%80%D5%A1%D5%BF%D5%B8%D6%82%D5%B6+(Ghars%2FXars+Tonratun)/@40.1804887,44.4458657,18.75z/data=!4m6!3m5!1s0x406abd003d524eeb:0xdcf01adc8feb5539!8m2!3d40.1804333!4d44.4461906!16s%2Fg%2F11lmjpf67j?entry=ttu'>
                  <Text _hover={{ color: 'white' }} transition={'0.2s'}>Օհանովի 9/7</Text>
                </a>
              </Flex>
            </Flex>  */}
          {/* </Flex> */}
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Header
