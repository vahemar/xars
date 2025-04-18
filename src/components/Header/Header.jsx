import React, { useState, useEffect } from 'react'
import { Box, Flex, Image, Input, Text, filter } from '@chakra-ui/react'
import xarsImage from '../../assets/svg/xarslogo.svg'
import { useLocation, useNavigate } from 'react-router'
import searchIcon from '../../assets/svg/search-svgrepo-com.svg'
import { menu } from '../../constants/constants'

function Header() {
  const [isSticky, setIsSticky] = useState(false)
  const [openSearch, setOpenSearch] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [filteredItems, setFilteredItems] = useState([])
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

  const handleSearch = (e) => {
    const value = e.target.value;
    setInputValue(value);

    if (value !== '') {
      const filtered = menu.filter(item =>
        item.mainChannel.toLowerCase().includes(value.toLowerCase()) ||
        item.secondaryChannel.some(subCategory =>
          subCategory.foodListNames.toLowerCase().includes(value.toLowerCase()) ||
          subCategory.foodList.some(foodItem =>
            foodItem.name.toLowerCase().includes(value.toLowerCase())
          )
        )
      );
      setFilteredItems(filtered);
    } else {
      setFilteredItems([]);
    }
  };

  const handleSearchSubmit = (e) => {
    if (e.key === 'Enter' && inputValue) {
      navigate('/menu', { state: { searchQuery: inputValue } })
      setOpenSearch(false)
      setInputValue('')
      setFilteredItems([])
    }
  }

  return (
    <Flex w={'full'} color={'#D0D0D0'}>
      <Flex display={['none', 'none', 'none', 'flex', 'flex']} w={'full'} direction={'column'}>
        {location.pathname !== '/menu' && (
          <Flex align={'center'} justify={'center'} overflow={'hidden'} direction={'column'} pos={'relative'} w={'full'} h={'100vh'}>
            <video autoPlay muted loop playsInline style={{ width: '100%', height: '100%', position: 'absolute', zIndex: '-1', objectFit: 'cover' }}>
              <source src='/videos/0409.mp4' type='video/mp4' />
            </video>
          </Flex>
        )}
        <Flex justify={'space-between'} color={'white'} pos={'fixed'} top={0} w={'full'} bg={isSticky ? 'rgba(0, 0, 0, 0.3)' : 'transparent'} transition={'0.3s ease'} pb={4} pt={4} pr={10} pl={10} zIndex={9999}>
          <Flex direction={'row'} gap={2} align={'center'} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} pointerEvents={'auto'} >
            <Image transition={'0.1s'} border={isSticky ? '' : ''} borderRadius={'360px'} src={xarsImage} cursor={'pointer'} id='#home' width={'75px'} height={'75px'} fill='#FFF' stroke='#FFF' />
          </Flex>
          <Flex gap={6}>
            <Flex direction={'row'} gap={4} align={'center'} transition={'0.3s'}>
              {location.pathname === '/menu' && (
                <>
                  {/* <Image src={searchIcon} transition="0.3s" onClick={() => setOpenSearch(!openSearch)} />
                  {openSearch && (
                    <Box pos="relative" overflow="hidden">
                      <Input transition="0.3s" h="34px" bg="#E1E1E1" borderColor="transparent" color="black" onChange={handleSearch} value={inputValue} onKeyDown={handleSearchSubmit} />
                      {filteredItems.length > 0 && (
                        <Box w="full" bg="white" color="black" position="absolute">
                          {filteredItems.map((item) => (
                            <Text key={item.id || item.mainChannel} cursor="pointer" _hover={{ color: 'gray.200' }}>{item.secondaryChannel.map((item) => 
                              <Text>{item.foodListNames}</Text>
                              // {item.foodList.map((item) => 
                              //   <Text></Text>
                              //   )}
                              )}
                              </Text>
                          ))}
                        </Box>
                      )}
                    </Box> */}
                  {/* )} */}
                </>
              )}

              <Text cursor={'pointer'} color={'gray.200'} fontWeight={600} transition={'0.2s'} _hover={{ color: '#DE2522' }}
                onClick={() => navigate(location.pathname === '/menu' ? '/' : '/menu')} fontSize={'21px'} fontFamily={'arial'}>
                {location.pathname === '/menu' ? 'Գլխավոր էջ' : 'Մենյու'}
              </Text>
            </Flex>

            <Flex gap={6} pl={4} pr={4} direction={'row'} align={'center'} borderRadius={'7px'} bg={'#742726'}>
                <Flex fontWeight={500} lineHeight={'20px'} color={'#F3E6E6'} direction={'column'}>
                  <a href='tel:+091730771'><Text _hover={{ color: 'gray.200' }} transition={'0.2s'} as='span'>(091) 730 771</Text></a>
                  <a href='tel:+093730771'><Text _hover={{ color: 'gray.200' }} transition={'0.2s'} as='span'>(093) 730 771</Text></a>
                </Flex>
                <Flex color={'#F3E6E6'} direction={'column'}>
                  <a href='https://www.google.com/maps/place/%D5%82%D5%A1%D6%80%D5%BD+%D4%B9%D5%B8%D5%B6%D6%80%D5%A1%D5%BF%D5%B8%D6%82%D5%B6+(Ghars%2FXars+Tonratun)/@40.1804887,44.4458657,18.75z/data=!4m6!3m5!1s0x406abd003d524eeb:0xdcf01adc8feb5539!8m2!3d40.1804333!4d44.4461906!16s%2Fg%2F11lmjpf67j?entry=ttu'>
                    <Text fontWeight={500} _hover={{ color: 'white' }} transition={'0.2s'} color={'gray.200'}>Օհանովի 9/7</Text>
                  </a>
                </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>

      <Flex display={['flex', 'flex', 'flex', 'none', 'none']} w={'full'}>
        {location.pathname !== '/menu' && (
          <Flex align={'center'} justify={'center'} overflow={'hidden'} direction={'column'} pos={'relative'} w={'full'} h={'100vh'}>
            <video autoPlay muted loop playsInline style={{ width: '100%', height: '100%', position: 'absolute', zIndex: '-1', objectFit: 'cover' }}>
              <source src='/videos/0409.mp4' type='video/mp4' />
            </video>
          </Flex>
        )}
        <Flex align={'center'} transition={'0.3s'} gap={4} justify={'space-between'} color={'white'} pos={'fixed'} top={0} w={'full'} bg={isSticky ? 'rgba(0, 0, 0, 0.3)' : 'transparent'}
          pb={2} pt={2} pr={8} pl={6} zIndex={9999}>
          <Flex direction={'row'} gap={2} align={'center'} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} pointerEvents={'auto'} >
            <Image borderRadius={'360px'} src={xarsImage} cursor={'pointer'} id='#home' width={'65px'} height={'65px'} fill='#FFF' stroke='#FFF' />
          </Flex>
          <Flex>
            <Text textAlign={'center'} fontSize={'2xl'} cursor={'pointer'} fontWeight={600} transition={'0.2s'} _hover={{ color: '#DE2522' }}
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
