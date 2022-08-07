import { Image, Text, Flex, Heading, Button } from '@chakra-ui/react'
import { Section, Icon, IconName } from './'

export const Motto = () => (
  <Section
    bg='#0C0809'
    flex="1"
    display='flex'
    flexDirection='column'
    alignItems={'center'}
    px={{base: '1rem', md: '2rem'}}
    >
    <Flex
      flex="1"
      bgImage="url(./shapes-bg.svg)"
      bgClip={'text'}
      maxW="70ch"
      py={['2rem', '3rem', '5rem', '6rem']}
    >
      <Text
        fontSize={['4xl', '5xl', '6xl', '8xl']}
        fontFamily='Liquido'
        fontStyle='italic'
        letterSpacing='0.125em'
        lineHeight='130%'
      >
        <Text fontFamily={'inherit'}>
          If you want to go fast, go alone.
        </Text>
        <Text fontFamily={'inherit'}>
          If you want to go far, go together.
        </Text>
      </Text>
    </Flex>
    <Flex
      border="1px solid"
      borderColor="brand.red"
      width="100%"
      justifyContent={'center'}
      alignItems={'center'}
      flexDirection={{base: 'column', md: 'row'}}
      gap='2rem'
      px={{base: '1rem', md: '2rem'}}
      py={{base: '1.5rem', md: '3rem'}}
    >
      <Image src="/chili-pixel.svg" height="48px" width="48px"/>
      <Flex direction='column' alignItems={{base: 'center', md: 'flex-start'}} flex='1'>
        <Heading as='h3' fontSize="xl" textTransform='uppercase' color='white'>
          Join us in building web3 for humans
        </Heading>
        <Text as="p" fontSize={{base: 'md', md: 'lg', lg: 'xl'}} color="brand.teal">
          Read and sign our Community First Manifesto to get started.
        </Text>
      </Flex>
      {/* TODO: Extract icon button into reusable component */}
      <Button
        as="a"
        cursor='pointer'
        border='1px solid'
        borderColor='brand.red'
        color='brand.red'
        borderRadius='none'
        fontWeight='500'
        bg="none"
        _hover={{bg: 'brand.red', color: 'white'}}
      >
        <Icon name={'scroll' as IconName} me={6} />
        Sign Manifesto
      </Button>
    </Flex>
  </Section>
)
