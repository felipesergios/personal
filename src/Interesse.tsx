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
import logo7 from './img/mysql.png'
import logo8 from './img/shell.jpg'

interface CardsItemProps {
    name: string;
    img:string;
  }
  const CardsItem: Array<CardsItemProps> = [
    {name: 'Laravel',img:logo3},
    {name: 'NodeJS',img:logo4},
    {name:'MariaDB',img:logo7},
    {name:'Shell-Script',img:logo8},
    {name:'ReactJS',img:logo5},
    {name:'ReactNative-Expo',img:logo6},
    {name:'Docker',img:logo1},
    {name:'Kubernetes',img:logo2},
  ];


  

   


export const Interesses = () => (
  <LightSpeed left>
  <Heading  ml={3} id="int" lineHeight={1.05} mt={'2rem'} mb={'2.5rem'}>

  Tecnologias que estou estudando
  
  </Heading>
  <SimpleGrid columns={[2, null, 4]} spacing="15px" >

  {CardsItem.map((data) => (
    <Box  height="auto">
       <Card name={data.name} img={data.img}/>
   </Box>
  ))}
  
</SimpleGrid>
</LightSpeed>
)
