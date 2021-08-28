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

import './global.css'
import { Formacao } from "./formacao"


export const App = () => (
  
  <ChakraProvider theme={theme}>
    <Nav>
    <Container centerContent maxW="container.xl">
    <Hero/>  
    <Experience />
    <Interesses/>
    <Formacao/>
    </Container>
   

    
    <Box textAlign="center" fontSize="xl" id="ac">
      <Grid minH="100vh" p={3}>
       
        
        <VStack spacing={8}>
          <Logo h="10vmin" pointerEvents="none" />
          <Text>
            Feito com chakra UI<Code fontSize="xl">src/App.tsx</Code> and save to reload.
          </Text>
          <Link
            color="teal.500"
            href="https://chakra-ui.com"
            fontSize="2xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn Chakra
          </Link>
        </VStack>
      </Grid>
    </Box>

    
    </Nav>
  </ChakraProvider>
)
