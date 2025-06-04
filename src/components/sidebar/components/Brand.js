import React from 'react';

// Chakra imports
import { Flex } from '@chakra-ui/react';

// Custom components
import { HSeparator } from 'components/separator/Separator';
import Logo from '../../../assets/img/new_black_logo.png';

export function SidebarBrand() {
  //   Chakra color mode

  return (
    <Flex align="center" direction="column">
    
      <img src={Logo} alt='brand logo' width={"175px"} height={"26px"} />
      <HSeparator mb="20px" mt="20px" />
    </Flex>
  );
}

export default SidebarBrand;
