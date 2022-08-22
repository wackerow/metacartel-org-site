import { Box, BoxProps, Flex, Image, Link, Text, TextProps } from '@chakra-ui/react'
import { Membership, Motto, PageHero, Section } from "../components"

interface StoryTextProps extends TextProps {
  rightBound?: boolean
}
const StoryText: React.FC<StoryTextProps> = ({ rightBound=false, children, ...props }) => (
  <Text
    maxW='storyBlock'
    mr={rightBound ? '0' : 'auto'}
    ml={rightBound ? 'auto' : '0'}
    my={8}
    fontSize='xl'
    {...props}
  >
    {children}
  </Text>
)

interface StoryBoxProps extends BoxProps {
  rightBound?: boolean
}
const StoryBox: React.FC<StoryBoxProps> = ({ rightBound=false, children, ...props }) => (
  <Box
    maxW='storyBlock'
    mr={rightBound ? '0' : 'auto'}
    ml={rightBound ? 'auto' : '0'}
    my={8}
    fontSize='xl'
    {...props}
  >
    {children}
  </Box>
)
const Lore: React.FC = () => {
  return (
    <Flex flexDirection='column' w='100%'>
      <PageHero bg='brand.red'>Lore</PageHero>

      <Section maxW='halfContainer' py={25} m='0 auto' color='brand.white' fontFamily='heading'>
        <Text fontSize='3xl' my={8} px={5}>
          In the beginning came the tweet, an imagining of ecosystem-wide coordination.
        </Text>
        <Image src="/images/og_tweet.png" alt="og tweet" />
        <Flex flexDirection='column' px={5}>
          <StoryBox>
            <Text>
              The tweet begot a Telegram working group, focused on a standard for MetaTransactions. The working group hacked all around the world and you know it was good, because they kept coming back, bringing new friends with them.
            </Text>
            <Box mt={3}>
              <Link href='https://archive.org'>Visit the OG</Link>
            </Box>
          </StoryBox>
          <Box  border="1px solid" borderColor="brand.red" p={3} mt={8}>
            <Image src="/images/FamilyPhotos/6323.png" alt="genesis call" />
          </Box>
          <StoryText>
            From the working group, came the DAO, le cartel de Meta, vagabonds with a penchant for spice. MetaCartel DAO gave out grants in waves, scanning hackathons for winners who aligned with the chili vibe:
          </StoryText>
          <Motto fontSize={['3xl', '4xl']} />
          <StoryBox rightBound>
            <Text>
              Successful products grew from those grants, like Aave, Gelato and Zapper, as well as dynamic communities, like MetaFactory, MetaGame, DAOhaus and Raid Guild. While receiving ETH is great, grant recipients express gratitude, mostly, for MetaCartel’s network and community support.
            </Text>
            <Box mt={3}>
              <Link href='/ecosystem'>Visit Ecosystem</Link>
            </Box>
          </StoryBox>
          <Box border="1px solid" borderColor="brand.red" p={3}>
            <Image src="/images/FamilyPhotos/metacartel_berlin-2019.jpg" alt="metacartel berlin 2019" />
          </Box>
          <StoryText>
            When the pandemic hit, immediately following EthDenver 2020, they weren’t affected. Everyone was already working remotely from all over the world.  Grants were still going out in waves, now including DAOs as viable recipients. With the rise in mainnet gas fees, core ops migrated to Gnosis chain, because we were actively governing together.
          </StoryText>
          <StoryText rightBound>
            Despite the dark shroud of covid, Meta Cartel was now much more than a working group or a DAO; it had bloomed into an entire ecosystem, and it was _thriving_. Communities were building tools to enhance coordination, while building meaningful connections with each other, enhancing their effectiveness and efficiency.
          </StoryText>
          <Box border="1px solid" borderColor="brand.red" p={3}>
            <Image src="/images/FamilyPhotos/metacartel_paris-2021.jpg" alt="metacartel paris 2021" />
          </Box>
          <StoryText>
            In summer 2021, the cartel emerged from pandemic lockdowns and gathered in Paris for ETHCC, which may have included a roof and mistakes that weren’t regrets. That fall, they realized a need for everyone to come together IRL.  MCON, the conference about DAOs, by DAOs and for DAOs, is now on its third iteration.  MetaCamp was an unconference in Costa Rica in Spring 2022.
          </StoryText>
          <Box border="1px solid" borderColor="brand.red" p={3}>
            <Image src="/images/FamilyPhotos/metacamp_family-FQJpyLUXwAE5LAY.jpeg" alt="metacamp 2022" />
          </Box>
          
          <StoryText rightBound>
            The cartel saw that it was all good, even the challenges, but what makes us most proud is the impact on grant recipients, beyond Eth.  A grant from MetaCartel is a signal to a growing ecosystem that an individual or a team has the esteem and support of a discerning community.
          </StoryText>
          <StoryText border="1px solid" borderColor="brand.red" p={3}>
            <Image src="/images/FamilyPhotos/mcon1_mf-jaqi-dj.jpeg" alt="mcon1 jaqi" />
          </StoryText>
          <StoryText rightBound border="1px solid" borderColor="brand.red" p={3}>
            <Image src="/images/FamilyPhotos/mcon2-posters-FZbytRqVUAAE_0N.jpg" alt="mcon2 posters" />
          </StoryText>
          
          
          <Box my={75}>
            <Text fontSize='4xl'>
              Ecosystem wide coordination doesn’t happen on its own. It requires care and energy, but the rewards are immense.
            </Text>
            <Text fontSize='xl'>
              Future chapters are already being written. Will you join us?
            </Text>
          </Box>
        </Flex>
      </Section>
      <Membership />
    </Flex>
  )
}

export default Lore
