import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Container,
} from "@chakra-ui/react"

import { Logo } from "./Logo"
import Nav from './Sidebar'
import Hero from './Hero'
import Experience from './Experience'
import { Interesses } from "./Interesse"
import Aprendizado from './Aprendizado'

import './global.css'
import { Formacao } from "./formacao"


export const App = () => (
  
  <ChakraProvider theme={theme}>
    <Nav>
    <Container  maxW="container.xl">
    <Hero/>  
    <Experience />
    <Interesses/>
    </Container>
    <Aprendizado/>

   
    <Box textAlign="center" fontSize="lg" id="foo">
    <Grid minH="10vh" p={3}>
    <VStack spacing={8}>
         <Logo h="5vmin" pointerEvents="none" />
         <Text>
         Made with chakra UI
         </Text>
       </VStack>
     </Grid>
    </Box>
    
    </Nav>
  </ChakraProvider>
)
