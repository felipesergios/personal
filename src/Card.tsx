import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Stack,
    Image,
  } from '@chakra-ui/react';
  
    interface CardProps {
        name: string;
        img: string;
      }
  export default function ProductSimple({name,img}:CardProps) {
    return (
      <Center py={12}>
        <Box
          role={'group'}
          p={2}
          maxW={'300px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'md'}
          rounded={'lg'}
          pos={'relative'}
          zIndex={1}>
          <Box
            rounded={'md'}
            mt={-12}
            pos={'relative'}
            height={'230px'}
            _after={{
              transition: 'all .3s ease',
              content: '""',
              w: 'full',
              h: 'full',
              pos: 'absolute',
              top: 5,
              left: 0,
              backgroundImage: `url(${img})`,
              filter: 'blur(2px)',
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: 'blur(20px)',
              },
            }}>
            <Image
              rounded={'lg'}
              height={200}
              width={282}
              objectFit={'cover'}
              src={img}
            />
          </Box>
          <Stack pt={10} align={'center'}>
            
            <Heading fontSize={'2xl'} fontFamily={'arial'} fontWeight={500}>
              {name}
            </Heading>
            
          </Stack>
        </Box>
      </Center>
    );
  }