import * as React from "react"
import {MdTimelapse,MdNetworkCheck,MdSchool,MdComputer} from 'react-icons/md'
import {
  Box,
  Flex,
  Container,
  List, 
  ListItem, 
  ListIcon, 
  Spacer, 
  Heading
} from "@chakra-ui/react"

import './global.css'


export const Formacao = () => (
    <Container>
<Heading size="lg" fontSize="50px" id="form" mb={10}>
<Flex>
  Minhas formações
  <Spacer />
 
</Flex>
</Heading>
  <Container maxW="container.lg" centerContent>

     <List spacing={3} fontSize="2xl">
  <ListItem>
    <ListIcon as={MdTimelapse} color="green.500" />
    Graduando em Técnologia da Informação UFRN/IMD
  </ListItem>
  
  <ListItem>
    <ListIcon as={MdNetworkCheck} color="green.500" />
    Técnico em Redes de computadores - UFRN/IMD
  </ListItem>
  {/* You can also use custom icons from react-icons */}
  <ListItem>
    <ListIcon as={MdComputer} color="green.500" />
    Técnico em manutenção e suporte de micro - CENEP
  </ListItem>
</List>
  </Container>
  </Container>
  
)
