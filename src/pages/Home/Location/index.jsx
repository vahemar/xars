import React from "react";
import { Flex, Image, Text } from '@chakra-ui/react'
import MapComponent from "../../../components/MapComponent/MapComponent";

const Location = () => {
    return (
        <Flex w={'full'} direction={'column'}>
            <MapComponent />
        </Flex>
    );
}

export default Location