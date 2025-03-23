import React from "react";
import { Flex, Image, Text } from '@chakra-ui/react'
import MapComponent from "../../../components/MapComponent/MapComponent";

const Location = () => {
    return (
        <Flex w={'full'} direction={'column'} justify={'center'} pb={2} >
            <MapComponent />
        </Flex>
    );
}

export default Location