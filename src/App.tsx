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
    <Formacao/>
    </Container>
    <Aprendizado/>

    <Box textAlign="center" fontSize="xl" id="foo">
      <Grid minH="100vh" p={3}>
       
        
        <VStack spacing={8}>
          <Logo h="10vmin" pointerEvents="none" />
          <Text>
            Feito com chakra UI
          </Text>
         
          
        </VStack>
      </Grid>
    </Box>

    
    </Nav>
  </ChakraProvider>
)
