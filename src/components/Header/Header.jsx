import React, { useState, useEffect } from 'react'
import { Flex, Image, Text } from '@chakra-ui/react'
import xarsImage from '../../assets/svg/xarslogo.svg'
import callIcon from '../../assets/svg/call.svg'
import locationIcon from '../../assets/svg/location.svg'
import { useLocation, useNavigate } from 'react-router'

function Header() {
  const [isSticky, setIsSticky] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

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
    {/* Desktop header */}
    <Flex display={['none', 'none', 'none', 'flex', 'flex']} w={'full'} direction={'column'}>
      {/* Only show video background on non-menu pages */}
      {location.pathname !== '/menu' && (
        <Flex align={'center'} justify={'center'} overflow={'hidden'} direction={'column'} pos={'relative'} w={'full'} h={'100vh'}>
          <video autoPlay muted loop playsInline style={{ width: '100%', height: '100%', position: 'absolute', zIndex: '-1', objectFit: 'cover' }}>
            <source src='/videos/videoplayback.mp4' type='video/mp4' />
          </video>
        </Flex>
      )}
      {/* Fixed Header */}
      <Flex justify={'space-between'} color={'white'} pos={'fixed'} top={0} w={'full'} bg={isSticky ? 'rgba(0, 0, 0, 0.7)' : 'transparent'} 
        transition={'0.5s ease'} pb={4} pt={4} pr={8} pl={8} zIndex={9999}>
        {/* Logo and home link */}
        <Flex direction={'row'} gap={2} align={'center'} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} pointerEvents={'auto'} >
          <Image transition={'0.1s'} border={isSticky ? '' : '2px solid black'} borderRadius={'360px'} src={xarsImage} cursor={'pointer'} id='#home' 
            width={'75px'} height={'75px'} fill='#FFF' stroke='#FFF' />
          <Text transition={'0.2s'} color={isSticky ? 'white' : 'white'} fontWeight={500} cursor={'pointer'} fontSize={'18px'}>Ղարս Թոնրատուն</Text>
        </Flex>
        {/* Navigation links */}
        <Flex gap={6}>
          <Flex direction={'row'} align={'center'}>
            <Text cursor={'pointer'} fontWeight={500} transition={'0.2s'} _hover={{ color: '#DE2522' }} 
              onClick={() => navigate(location.pathname === '/menu' ? '/' : '/menu')} fontSize={'17px'} fontFamily={'arial'}>
              {location.pathname === '/menu' ? 'Գլխավոր էջ' : 'Մենյու'}
            </Text>
          </Flex>
          {/* Contact and location info */}
          <Flex gap={6} pt={2} pb={2} pl={4} pr={4} direction={'row'} align={'center'} borderRadius={'7px'} bg={'#6C2120'}>
            <Flex direction={'row'} align={'center'} gap={'10px'}>
              <Image src={callIcon} stroke='#F3E6E6' fill='#F3E6E6' width={'20px'} height={'20px'} />
              <Flex lineHeight={'20px'} color={'#F3E6E6'} direction={'column'}>
                <a href='tel:+010730771'><Text _hover={{ color: 'white' }} transition={'0.2s'} as='span'>(010) 730 771</Text></a>
                <a href='tel:+091730771'><Text _hover={{ color: 'white' }} transition={'0.2s'} as='span'>(091) 730 771</Text></a>
                <a href='tel:+093730771'><Text _hover={{ color: 'white' }} transition={'0.2s'} as='span'>(093) 730 771</Text></a>
              </Flex>
            </Flex>
            <Flex gap={'5px'} direction={'row'} align={'center'}>
              <Image src={locationIcon} width={'30px'} height={'30px'} />
              <Flex color={'#F3E6E6'} direction={'column'}>
                <a href='https://www.google.com/maps/place/%D5%82%D5%A1%D6%80%D5%BD+%D4%B9%D5%B8%D5%B6%D6%80%D5%A1%D5%BF%D5%B8%D6%82%D5%B6/'><Text _hover={{ color: 'white' }} transition={'0.2s'}>Օհանովի 9/7</Text></a>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  
    {/* Mobile header */}
    <Flex display={['flex', 'flex', 'flex', 'none', 'none']} w={'full'}>
      {location.pathname !== '/menu' && (
        <Flex align={'center'} justify={'center'} overflow={'hidden'} direction={'column'} pos={'relative'} w={'full'} h={'100vh'}>
          <video autoPlay muted loop playsInline style={{ width: '100%', height: '100%', position: 'absolute', zIndex: '-1', objectFit: 'cover' }}>
            <source src='/videos/videoplayback.mp4' type='video/mp4' />
          </video>
        </Flex>
      )}
      <Flex align={'center'} gap={4} justify={'space-between'} color={'white'} pos={'fixed'} top={0} w={'full'} bg={'rgba(0, 0, 0, 0.7)'} 
        pb={4} pt={4} pr={4} pl={4} zIndex={9999}>
        <Flex direction={'row'} gap={2} align={'center'} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} pointerEvents={'auto'} >
          <Image borderRadius={'360px'} border={'2px solid black'} src={xarsImage} cursor={'pointer'} id='#home' width={'75px'} height={'75px'} fill='#FFF' stroke='#FFF' />
        </Flex>
        <Flex>
          <Text textAlign={'center'} cursor={'pointer'} fontWeight={500} transition={'0.2s'} _hover={{ color: '#DE2522' }} 
            onClick={() => navigate(location.pathname === '/menu' ? '/' : '/menu')} fontFamily={'arial'}>
            {location.pathname === '/menu' ? 'Գլխավոր էջ' : 'Մենյու'}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  </Flex>
  
  )
}

export default Header
