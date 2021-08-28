import * as React from "react"
import {
  Box,
  Heading,
  SimpleGrid,
} from "@chakra-ui/react"

import Card from './Card'
import LightSpeed from 'react-reveal/LightSpeed';
import logo1 from "./img/docker.png"
import logo2 from "./img/kubernetes.png"
import logo3 from "./img/laravel.png"
import logo4 from "./img/nodejs.png"
import logo5 from './img/reactjs.jpeg'
import logo6 from './img/expo.png'

interface CardsItemProps {
    name: string;
    img:string;
  }
  const CardsItem: Array<CardsItemProps> = [
    {name: 'Docker',img:logo1},
    {name: 'Kubernetes',img:logo2},
    {name:'Laravel',img:logo3},
    {name:'NodeJS',img:logo4},
    {name:'ReactJS',img:logo5},
    {name:'ReactNative-Expo',img:logo6},
  ];

   


export const Interesses = () => (
  <LightSpeed left>
  <Heading    
  lineHeight={1.1}
  fontWeight={600}
  fontSize="5xl"
  pb={2}
  id="int">

Algumas tecnologias que curto  
  
  </Heading>
  <SimpleGrid columns={[2, null, 3]} spacing="5px" >

  {CardsItem.map((data) => (
    <Box  height="auto">
       <Card name={data.name} img={data.img}/>
   </Box>
  ))}
  
</SimpleGrid>
</LightSpeed>
)
