import {
    Container,
    SimpleGrid,
    Image,
    Flex,
    Heading,
    Text,
    Stack,
    StackDivider,
    Icon,
    useColorModeValue,
  } from '@chakra-ui/react';
  import {
    IoPerson,
    IoLogoBitcoin,
    IoSearchSharp,
    IoWifiSharp,
    IoMailOpen,
    IoCodeSlash,
  } from 'react-icons/io5';
  import logo_perfil from './img/perfil.jpg'
  import { ReactElement } from 'react';
  import Fade from 'react-reveal/Fade'
  interface FeatureProps {
    text: string;
    iconBg: string;
    icon?: ReactElement;
  }
 
  
  const Feature = ({ text, icon, iconBg }: FeatureProps) => {
    
    return (
      <Stack direction={'row'} align={'center'}>
        <Flex
          w={8}
          h={8}
          align={'center'}
          justify={'center'}
          rounded={'full'}
          bg={iconBg}>
          {icon}
        </Flex>
        <Text fontWeight={600}>{text}</Text>
      </Stack>
    );
  };
  
  export default function SplitWithImage() {
    return (
      <Fade center >
      <Container maxW={'6xl'} py={12} id="xp">
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Flex>
            <Image
              rounded={'md'}
              alt={'feature image'}
              src="https://source.unsplash.com/random/featured/?programing"
              objectFit={'cover'}
            />
          </Flex>
          <Stack spacing={4}>
            <Text
              textTransform={'uppercase'}
              color={'blue.400'}
              fontWeight={600}
              fontSize={'sm'}
              bg={useColorModeValue('blue.50', 'blue.900')}
              p={2}
              alignSelf={'flex-start'}
              rounded={'md'}>
              XP
            </Text>
            <Heading>My Solid Experiences</Heading>
            <Text color={'gray.500'} fontSize={'md'}>
            These are the technologies I had the most contact with during my journey with IT
            </Text>
            <Stack
              spacing={4}
              divider={
                <StackDivider
                  borderColor={useColorModeValue('gray.100', 'gray.700')}
                />
              }>
              <Feature
                icon={
                  <Icon as={IoWifiSharp} color={'yellow.500'} w={5} h={5} />
                }
                iconBg={useColorModeValue('yellow.100', 'yellow.900')}
                text={'Linux | HCI | Debian'}
              />
              
              <Feature
                icon={<Icon as={IoPerson} color={'black.500'} w={5} h={5} />}
                iconBg={useColorModeValue('red.100', 'red.900')}
                text={'Zabbix | Network Analysis'}
              />
              
              <Feature
                icon={
                  <Icon as={IoCodeSlash} color={'purple.500'} w={5} h={5} />
                }
                iconBg={useColorModeValue('purple.100', 'purple.900')}
                text={'Automations with ansible and python'}
              />
             
            </Stack>
          </Stack>
          
        </SimpleGrid>
      </Container>
      </Fade>
    );
  }