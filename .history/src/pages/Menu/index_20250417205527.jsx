import React from 'react';
import { Button, Flex, Text } from '@chakra-ui/react';
import backgroundWoodImage from '../../assets/png/backgroundWood.webp';
import highResBackground from '../../assets/png/backgroundWood.webp';
import backgroundWoodImageIOS from '../../assets/png/backgroundWoodIOS.webp';
import backgroundWoodImageIOS2 from '../../assets/png/backgroundWoodIO5.webp';
import { menu } from '../../constants/constants';
import { useLocation } from 'react-router';

function Menu() {
  const location = useLocation();
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  const searchQuery = location.state?.searchQuery || '';

  const filteredMenu = menu.map(category => ({
    ...category,
    secondaryChannel: category.secondaryChannel.map(subCategory => ({
      ...subCategory,
      foodList: subCategory.foodList.filter(foodItem =>
        foodItem.name.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    })).filter(subCategory => subCategory.foodList.length > 0)
  })).filter(category => category.secondaryChannel.length > 0);

  return (
    <Flex w={'full'}>
      <Flex display={['none', 'none', 'none', 'flex', 'flex']} bgImage={backgroundWoodImage} bgSize={'cover'} bgRepeat={'repeat'} bgPosition={'center center'} bgAttachment={'fixed'} gap={20} direction={'column'} w={'full'} p={16} >
        <Flex gap={12} direction={'column'} align={'center'} w={'full'} p={12}>
          <Text color={'white'} fontFamily={'Roboto'} fontSize={'30px'} fontWeight={500}>Ճաշացանկ</Text>
          <Flex direction={'column'} borderRadius={'15px'} opacity={'0.9'} p={6} w={'full'} bg={'#F9F9F9'}>
            <Flex gap={10} fontWeight={600} color={'black'} direction={'column'} w={'full'} justify={'space-around'}>
              {filteredMenu.map((item) => (
                <Flex bg={'#F9F9F9'} w={'full'} gap={4} key={item.id} direction={'column'} align={'center'}>
                  <Text fontSize={'28px'}>{item.mainChannel}</Text>
                  <Flex pt={8} w={'full'} direction={'column'}>
                    <Flex justify={'center'} align={'flex-start'} direction={'row'} wrap={'wrap'} gap={6} w={'full'}>
                      {item.secondaryChannel.map((itemSecond) => (
                        <Flex border={'2px solid #D8D4D4'} borderRadius={'25px'} gap={2} align={'center'} direction={'column'} w={'320px'} key={itemSecond.id}>
                          <Text pt={2} fontSize={'24px'}>
                            {itemSecond.foodListNames && itemSecond.foodListNames.charAt(0).toUpperCase() + itemSecond.foodListNames.slice(1)}
                          </Text>
                          <Flex  direction={'column'} w={'full'}>
                            {itemSecond.foodList.map((foodItem) => (
                              <Flex p={2} gap={4} w={'full'} align={'center'} key={foodItem.id} direction={'row'} justify={'space-between'}>
                                <Flex direction={'column'} align={'flex-start'}>
                                  <Text fontSize={'20px' && foodItem.fontsizeXL}>
                                    {foodItem.name.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                                  </Text>
                                  <Text fontSize={'17px'}>{foodItem.price}</Text>
                                </Flex>
                                {foodItem.img}
                              </Flex>
                            ))}
                          </Flex>
                        </Flex>
                      ))}
                    </Flex>
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
      <Flex display={['flex', 'flex', 'flex', 'none', 'none']}
        bgImage={isIOS ? backgroundWoodImage : backgroundWoodImage}
        bgSize="cover"      // Ensures full coverage without gaps
        bgRepeat="no-repeat"  // Prevents repeating
        bgPosition="center"
        bgAttachment="fixed"  // Keeps it fixed on supported devices
        w="full"
        p={10}>
        <Flex gap={10} direction={'column'} align={'center'} w={'full'} pt={10}>
          <Text color={'white'} fontFamily={'Roboto'} pt={10} fontSize={'30px'} fontWeight={500}>Ճաշացանկ</Text>
          <Flex direction={'column'} borderRadius={'15px'} opacity={'0.9'} p={6} w={'full'} bg={'#FFF'}>
            <Flex gap={10} fontWeight={600} color={'black'} direction={'column'} w={'full'} justify={'space-around'}>
            <Button onClick={() => document.getElementById("drinks").scrollIntoView({ behavior: "smooth" })}>
  Jump to Drinks
</Button>

              {filteredMenu.map((item) => (
                <Flex bg={'#FFF'} w={'full'} gap={4} key={item.id} direction={'column'} align={'center'}>
                  <Text fontSize={'25px'}>{item.mainChannel}</Text>
                  <Flex pt={4} w={'full'} direction={'column'}>
                    <Flex justify={'center'} align={'flex-start'} direction={'row'} wrap={'wrap'} gap={10} w={'full'}>
                      {item.secondaryChannel.map((itemSecond) => (
                        <Flex border={'2px solid #D8D4D4'} borderRadius={'25px'} gap={2} align={'center'} direction={'column'} w={'500px'} key={itemSecond.id}>
                          <Text pt={4} fontSize={'23px'}>
                            {itemSecond.foodListNames && itemSecond.foodListNames.charAt(0).toUpperCase() + itemSecond.foodListNames.slice(1)}
                          </Text>
                          <Flex pt={4} direction={'column'} w={'full'}>
                            {itemSecond.foodList.map((foodItem) => (
                              <Flex p={2} gap={4} w={'full'} align={'center'} key={foodItem.id} direction={'row'} justify={'space-between'}>
                                <Flex direction={'column'} align={'flex-start'}>
                                  <Text fontSize={'20px' && foodItem.fontsizeM}>
                                    {foodItem.name.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                                  </Text>
                                  <Text fontSize={'17px'}>{foodItem.price}</Text>
                                </Flex>
                                {foodItem.img}
                              </Flex>
                            ))}
                          </Flex>
                        </Flex>
                      ))}
                    </Flex>
                    <Flex justify={'center'} align={'flex-start'} direction={'row'} wrap={'wrap'} gap={10} w={'full'}>
                      {item.drinks && item.drinks.map((drinkItem) => (
                        <Flex border={'2px solid #FFF'} borderRadius={'25px'} gap={2} align={'center'} direction={'column'} w={'500px'} key={drinkItem.id}>
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