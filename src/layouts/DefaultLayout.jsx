import { Flex } from '@chakra-ui/react'
import React from 'react'
import Header from '../components/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer/Footer'

function DefaultLayout() {

  console.log('hello')
  
  return (
    <Flex w={'full'} direction={'column'}>
      <Header />
      <Outlet />
      <Footer />
    </Flex>
  )
}

export default DefaultLayout