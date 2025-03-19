import React from 'react'
import { Flex, Text, Divider } from '@chakra-ui/react'

function Workhours() {
    return (
        <Flex w={'full'} align={'center'} justify={'center'}>
            <Flex w={'full'} justify={'center'} gap={10} align={'center'} direction={'column'}>
                <Text fontWeight={500} fontSize={'30px'} textAlign={'center'}>ՄԵՐ ԱՇԽԱՏԱՆՔԱՅԻՆ ԺԱՄԵՐԸ</Text>
                <Flex w={'full'} align={'center'} flexWrap="wrap" justify={'center'} direction={'row'}>

                    <Flex direction={'row'} align={'center'} gap={2}>
                        <Flex direction={'column'} align={'center'} justify={'center'} m={2}>
                            <Text fontWeight={500} fontSize="17px">ԵՐԿՈՒՇԱԲԹԻ</Text>
                            <Text fontWeight={500} fontSize="18px">09:00 - 22:00</Text>
                            <Divider borderWidth={1} borderColor={'black'} />
                        </Flex>
                        <Text>__</Text>
                        <Flex direction={'column'} align={'center'} justify={'center'} m={2}>
                            <Text fontWeight={500} fontSize="17px">ԿԻՐԱԿԻ</Text>
                            <Text fontWeight={500} fontSize="18px">09:00 - 22:00</Text>
                            <Divider borderWidth={1} borderColor={'black'} />
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default Workhours;