import { Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { menu } from '../../constants/constants';

function Menu() {
    return (
        <Flex w={'full'}>
            {/* Larger screen layout */}
            <Flex
                display={['none', 'none', 'none', 'flex', 'flex']}
                bgImage={'url(https://images.pexels.com/photos/326333/pexels-photo-326333.jpeg)'}
                bgSize={'cover'}
                bgRepeat={'repeat'}
                bgPosition={'center center'}
                bgAttachment={'fixed'}
                gap={20}
                direction={'column'}
                w={'full'}
                p={16}
            >
                <Flex gap={12} direction={'column'} align={'center'} w={'full'} p={12}>
                    <Text color={'white'} fontFamily={'Roboto'} fontSize={'30px'} fontWeight={500}>Ճաշացանկ</Text>
                    <Flex direction={'column'} borderRadius={'25px'} opacity={'0.9'} p={6} w={'full'} bg={'#FFFEF0'}>
                        <Flex gap={10} fontWeight={600} color={'black'} direction={'column'} w={'full'} justify={'space-around'}>
                            {menu && menu.map((item) => (
                                <Flex bg={'#FFFEF0'} w={'full'} gap={4} key={item.id} direction={'column'} align={'center'}>
                                    <Text fontSize={'25px'}>{item.mainChannel}</Text>
                                    <Flex pt={8} w={'full'} direction={'column'}>
                                        {/* Display food items */}
                                        <Flex justify={'center'} align={'flex-start'} direction={'row'} wrap={'wrap'} gap={10} w={'full'}>
                                            {item.secondaryChannel && item.secondaryChannel.map((itemSecond) => (
                                                <Flex border={'2px solid #D8D4D4'} borderRadius={'25px'} gap={2} align={'center'} direction={'column'} w={'320px'} key={itemSecond.id}>
                                                    <Text pt={4} fontSize={'21px'}>
                                                        {itemSecond.foodListNames && itemSecond.foodListNames.charAt(0).toUpperCase() + itemSecond.foodListNames.slice(1)}
                                                    </Text>
                                                    <Flex pt={4} direction={'column'} w={'full'}>
                                                        {/* Food Items */}
                                                        {itemSecond.foodList && itemSecond.foodList.map((foodItem) => (
                                                            <Flex p={2} gap={4} w={'full'} align={'center'} key={foodItem.id} direction={'row'} justify={'space-between'}>
                                                                <Flex direction={'column'} align={'flex-start'}>
                                                                    <Text>{foodItem.name}</Text>
                                                                    <Text fontSize={'21px'}>{foodItem.price}</Text>
                                                                </Flex>
                                                                {foodItem.img}
                                                            </Flex>
                                                        ))}
                                                    </Flex>
                                                </Flex>
                                            ))}
                                        </Flex>
                                        {/* Display drinks */}
                                        <Flex justify={'center'} align={'flex-start'} direction={'row'} wrap={'wrap'} gap={10} w={'full'}>
                                            {item.drinks && item.drinks.map((drinkItem) => (
                                                <Flex border={'2px solid #D8D4D4'} borderRadius={'25px'} gap={2} align={'center'} direction={'column'} w={'320px'} key={drinkItem.id}>
                                                    <Text pt={4} fontSize={'21px'}>{drinkItem.name}</Text>
                                                    <Text fontSize={'21px'}>{drinkItem.price}</Text>
                                                </Flex>
                                            ))}
                                        </Flex>
                                    </Flex>
                                </Flex>
                            ))}
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>

            {/* Mobile layout */}
            <Flex
                display={['flex', 'flex', 'flex', 'none', 'none']}
                bgImage={'url(https://images.pexels.com/photos/326333/pexels-photo-326333.jpeg)'}
                bgSize={'cover'}
                bgRepeat={'repeat'}
                bgPosition={'center center'}
                bgAttachment={'fixed'}
                gap={20}
                direction={'column'}
                w={'full'}
                p={6}
            >
                <Flex gap={10} direction={'column'} align={'center'} w={'full'} pt={10}>
                    <Text color={'white'} fontFamily={'Roboto'} pt={10} fontSize={'30px'} fontWeight={500}>Ճաշացանկ</Text>
                    <Flex direction={'column'} borderRadius={'25px'} opacity={'0.8'} p={6} w={'full'} bg={'#FFFEF0'}>
                        <Flex gap={10} fontWeight={600} color={'black'} direction={'column'} w={'full'} justify={'space-around'}>
                            {menu && menu.map((item) => (
                                <Flex bg={'#FFFEF0'} w={'full'} gap={4} key={item.id} direction={'column'} align={'center'}>
                                    <Text fontSize={'25px'}>{item.mainChannel}</Text>
                                    <Flex pt={8} w={'full'} direction={'column'}>
                                        {/* Display food items */}
                                        <Flex justify={'center'} align={'flex-start'} direction={'row'} wrap={'wrap'} gap={10} w={'full'}>
                                            {item.secondaryChannel && item.secondaryChannel.map((itemSecond) => (
                                                <Flex border={'2px solid #D8D4D4'} borderRadius={'25px'} gap={2} align={'center'} direction={'column'} w={'500px'} key={itemSecond.id}>
                                                    <Text pt={4} fontSize={'21px'}>
                                                        {itemSecond.foodListNames && itemSecond.foodListNames.charAt(0).toUpperCase() + itemSecond.foodListNames.slice(1)}
                                                    </Text>
                                                    <Flex pt={4} direction={'column'} w={'full'}>
                                                        {/* Food Items */}
                                                        {itemSecond.foodList && itemSecond.foodList.map((foodItem) => (
                                                            <Flex p={2} gap={4} w={'full'} align={'center'} key={foodItem.id} direction={'row'} justify={'space-between'}>
                                                                <Flex direction={'column'} align={'flex-start'}>
                                                                    <Text>{foodItem.name}</Text>
                                                                    <Text fontSize={'21px'}>{foodItem.price}</Text>
                                                                </Flex>
                                                                {foodItem.img}
                                                            </Flex>
                                                        ))}
                                                    </Flex>
                                                </Flex>
                                            ))}
                                        </Flex>
                                        {/* Display drinks */}
                                        <Flex justify={'center'} align={'flex-start'} direction={'row'} wrap={'wrap'} gap={10} w={'full'}>
                                            {item.drinks && item.drinks.map((drinkItem) => (
                                                <Flex border={'2px solid #D8D4D4'} borderRadius={'25px'} gap={2} align={'center'} direction={'column'} w={'500px'} key={drinkItem.id}>
                                                    <Text pt={4} fontSize={'21px'}>{drinkItem.name}</Text>
                                                    <Text fontSize={'21px'}>{drinkItem.price}</Text>
                                                </Flex>
                                            ))}
                                        </Flex>
                                    </Flex>
                                </Flex>
                            ))}
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    );
}

export default Menu;