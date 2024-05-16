import * as React from "react"
import {
  Box,
  Center,
  Heading,
  Text,
  SimpleGrid,
} from "@chakra-ui/react"

import Card from './Card'
import LightSpeed from 'react-reveal/LightSpeed';


interface CardsItemProps {
    name: string;
    img:string;
  }
  const CardsItem: Array<CardsItemProps> = [
    {name: 'Laravel',img:"https://skillicons.dev/icons?i=laravel"},
    {name: 'AWS',img:"https://skillicons.dev/icons?i=aws"},
    {name:'Redhat',img:"https://skillicons.dev/icons?i=redhat"},
    {name:'Shell',img:"https://skillicons.dev/icons?i=bash"},
    {name:'ReactJS',img:"https://skillicons.dev/icons?i=react"},
    {name:'nginx',img:"https://skillicons.dev/icons?i=nginx"},
    {name:'Docker',img:"https://skillicons.dev/icons?i=docker"},
    {name:'Kubernetes',img:"https://skillicons.dev/icons?i=kubernetes"},
    {name:"Ansible",img:"https://skillicons.dev/icons?i=ansible"}
  ];


  

   


export const Interesses = () => (
  <LightSpeed left>
  <Center  ml={3} id="int" lineHeight={1.05} mt={'1rem'} mb={'1.5rem'}>

  <Text fontSize={'2xl'}>Technologies that I am studying and applying in everyday life</Text>
  
  </Center>
  <SimpleGrid columns={[2, null, 3]} spacing="0.5px" >

  {CardsItem.map((data) => (
    <Box  height="auto">
       <Card name={data.name} img={data.img}/>
   </Box>
  ))}
  
</SimpleGrid>
</LightSpeed>
)
