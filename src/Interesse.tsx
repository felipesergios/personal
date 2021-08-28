import * as React from "react"
import {
  Box,
  Heading,
  SimpleGrid,
} from "@chakra-ui/react"

import Card from './Card'
import LightSpeed from 'react-reveal/LightSpeed';

interface CardsItemProps {
    name: string;
    img:string;
  }
  const CardsItem: Array<CardsItemProps> = [
    { name: 'Home',img:'home'},
    { name: 'Kubernetes' ,img:'https://miro.medium.com/max/730/0*0xAFVp2oiGROzPiX'},
    { name: 'Laravel' , img:'https://images.ctfassets.net/23aumh6u8s0i/7gu8qd0qzmuxWWjYLhZpqo/2bb8a206fe4a86af9414545b5c25c368/laravel' },
  ];


export const Interesses = () => (
  <LightSpeed left>
  <Heading    
  lineHeight={1.1}
  fontWeight={600}
  fontSize="5xl"
  id="int">
  Techs que curto 
  
  </Heading>
  <SimpleGrid columns={[2, null, 3]} spacing="10px" >

  {CardsItem.map((data) => (
    <Box  height="auto">
       <Card name={data.name} img={data.img}/>
   </Box>
  ))}
  
</SimpleGrid>
</LightSpeed>
)
