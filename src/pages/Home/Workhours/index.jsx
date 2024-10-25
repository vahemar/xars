import React from 'react'
import { Flex, Text, Divider } from '@chakra-ui/react'

function Workhours() {
    return (
        <Flex w={'full'} align={'center'} justify={'center'}>
            <Flex w={'full'} justify={'center'} gap={10} align={'center'} direction={'column'}>
                <Text fontWeight={500} fontSize={'30px'} textAlign={'center'}>ՄԵՐ ԱՇԽԱՏԱՆՔԱՅԻՆ ԺԱՄԵՐԸ</Text>
                <Flex w={'full'} align={'center'} flexWrap="wrap" justify={'center'} direction={'row'}>
                    {[
                        { day: "ԵՐԿՈՒՇԱԲԹԻ", time: "09:00 - 22:00" },
                        { day: "ԵՐԵՔՇԱԲԹԻ", time: "09:00 - 22:00" },
                        { day: "ՉՈՐԵՔՇԱԲԹԻ", time: "09:00 - 22:00" },
                        { day: "ՀԻՆԳՇԱԲԹԻ", time: "09:00 - 22:00" },
                        { day: "ՈՒՐԲԱԹ", time: "09:00 - 22:00" },
                        { day: "ՇԱԲԱԹ", time: "09:00 - 22:00" },
                        { day: "ԿԻՐԱԿԻ", time: "09:00 - 22:00" },
                    ].map(({ day, time }) => (
                        <Flex key={day} direction={'column'} align={'center'} justify={'center'} m={2}>
                            <Text fontSize="17px">{day}</Text>
                            <Text fontSize="18px">{time}</Text>
                            <Divider borderColor={'#9A9A9A'} />
                        </Flex>
                    ))}
                </Flex>
            </Flex>
        </Flex>
    )
}

export default Workhours;