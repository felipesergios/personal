import * as React from "react"
import {
  Box,
  Heading,
  SimpleGrid,
} from "@chakra-ui/react"

import Card from './Card'

export const Interesses = () => (
  <>
  <Heading    
  lineHeight={1.1}
  fontWeight={600}
  fontSize="xl">
  Meus Interesses
  </Heading>
  <SimpleGrid columns={[2, null, 3]} spacing="1px" id="int">
  <Box  height="auto">
      <Card img="https://images.ctfassets.net/23aumh6u8s0i/7gu8qd0qzmuxWWjYLhZpqo/2bb8a206fe4a86af9414545b5c25c368/laravel" name="Laravel"/>
  </Box>
  <Box  height="auto">
      <Card/>
  </Box>
  <Box  height="auto">
      <Card/>
  </Box>
  <Box  height="auto">
      <Card/>
  </Box>
  <Box  height="auto">
      <Card/>
  </Box>
  <Box  height="auto">
      <Card/>
  </Box>
</SimpleGrid>
  </>
)