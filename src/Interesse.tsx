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
import logo5 from './img/reactjs.png'
import logo6 from './img/expo.png'
import logo7 from './img/mysql.png'
import logo8 from './img/shell.jpg'
import logo9 from './img/flutter.png'
import logo10 from './img/aspnetcore.jpeg'

interface CardsItemProps {
    name: string;
    img:string;
  }
  const CardsItem: Array<CardsItemProps> = [
    {name: 'Laravel',img:logo3},
    {name: 'NodeJS',img:logo4},
    {name:'MariaDB',img:logo7},
    {name:'Shell',img:logo8},
    {name:'ReactJS',img:logo5},
    {name:'ReactNative',img:logo6},
    {name:'Docker',img:logo1},
    {name:'Kubernetes',img:logo2},
    {name:'Flutter',img:logo9},
    {name:'AspNetCore',img:logo10}
  ];


  

   


export const Interesses = () => (
  <LightSpeed left>
  <Heading  ml={5} id="int" lineHeight={1.05} mt={'1rem'} mb={'1.5rem'}>

  Tecnologias que estou estudando
  
  </Heading>
  <SimpleGrid columns={[2, null, 5]} spacing="2px" >

  {CardsItem.map((data) => (
    <Box  height="auto">
       <Card name={data.name} img={data.img}/>
   </Box>
  ))}
  
</SimpleGrid>
</LightSpeed>
)
