import React from 'react'
import { Flex, Text, Th, TableContainer, Thead, Tbody, Table, Tr, Td } from '@chakra-ui/react'

function Workhours() {
    return (
        <Flex w={'full'} justify={'center'} gap={10} align={'center'} direction={'column'}>
            <Text fontWeight={500} fontSize={'30px'}>ՄԵՐ ԱՇԽԱՏԱՆՔԱՅԻՆ ԺԱՄԵՐԸ</Text>
            <TableContainer>
                <Table>
                    <Thead>
                        <Tr>
                            <Th fontSize={'17px'}> ԵՐԿՈՒՇԱԲԹԻ</Th>
                            <Th fontSize={'17px'}>ԵՐԵՔՇԱԲԹԻ</Th>
                            <Th fontSize={'17px'}> ՉՈՐԵՔՇԱԲԹԻ</Th>
                            <Th fontSize={'17px'}>ՀԻՆԳՇԱԲԹԻ</Th>
                            <Th fontSize={'17px'}> ՈՒՐԲԱԹ </Th>
                            <Th fontSize={'17px'}> ՇԱԲԱԹ</Th>
                            <Th fontSize={'17px'}>ԿԻՐԱԿԻ </Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td fontSize={'18px'}>09:00 - 22:00</Td>
                            <Td fontSize={'18px'}>09:00 - 22:00</Td>
                            <Td fontSize={'18px'}>09:00 - 22:00</Td>
                            <Td fontSize={'18px'}>09:00 - 22:00</Td>
                            <Td fontSize={'18px'}>09:00 - 22:00</Td>
                            <Td fontSize={'18px'}>09:00 - 22:00</Td>
                            <Td fontSize={'18px'}>09:00 - 22:00</Td>
                        </Tr>
                    </Tbody>
                </Table>
            </TableContainer>
        </Flex>
    )
}

export default Workhours;