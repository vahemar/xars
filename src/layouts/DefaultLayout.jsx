import React from 'react'
import { Flex } from '@chakra-ui/react'
import Header from '../components/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer/Footer'

function DefaultLayout() {
  return (
    <Flex w={'full'} direction={'column'}>
      <Header />
      <Outlet />
      <Footer />
    </Flex>
  )
}

export default DefaultLayout