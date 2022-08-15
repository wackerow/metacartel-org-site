import { useState } from 'react'
import { Flex, FlexProps } from '@chakra-ui/react'
import { CtaItem, Icon, IconName } from './'

// TODO: Replace action item dummy data
const actionItems = [
  {
    label: 'Taco Tuesday lorem ipsum dolor sit amet',
    action: 'Find tacos',
    icon: 'shopping-cart',
    color: 'brand.taco',
    url: 'https://tacotuesday.com',
  },
  {
    label: 'Taco Tuesday lorem',
    // action: 'Find tacos',
    icon: 'shield',
    color: 'brand.sun',
    url: 'https://tacotuesday.com',
  },
  {
    label: 'Taco Tuesday lorem ipsum dolor sit amet consectetur',
    action: 'Find tacos',
    icon: 'cup',
    color: 'brand.green',
    url: 'https://tacotuesday.com',
  },
  {
    label: 'Taco Tuesday lorem ipsum dolor sit amet adipisicing',
    // action: 'Find tacos',
    icon: 'goal',
    color: 'brand.teal',
    url: 'https://tacotuesday.com',
  },
  {
    label: 'Taco Tuesday',
    action: 'Find tacos',
    icon: 'joystick',
    color: 'brand.purp',
    url: 'https://tacotuesday.com',
  },
]

interface NavIndicatorProps extends FlexProps {
  isLeft?: boolean
  isScrolledLeft?: boolean
  isScrolledRight?: boolean
}
const NavIndicator: React.FC<NavIndicatorProps> = (props) => (
  <Flex
    bg='brand.offWhite'
    color="brand.red"
    position='absolute'
    borderRadius='none'
    height="100%"
    width='fit-content'
    p={3}
    transition="transform 0.2s ease-in-out"
    {...props}
  >
    <Icon name={"play" as IconName} />
  </Flex>
)

export const CtaScrollBar: React.FC<FlexProps> = (props) => {
  const [isScrolledLeft, setIsScrolledLeft] = useState(false)
  const [isScrolledRight, setIsScrolledRight] = useState(false)
  
  const handleScroll = ({ target }) => {
    const { scrollLeft, scrollWidth, clientWidth } = target
    const TOLERANCE = 16
    if (scrollLeft < TOLERANCE) {
      setIsScrolledLeft(true)
      return
    } 
    if (scrollLeft > scrollWidth - clientWidth - TOLERANCE) {
      setIsScrolledRight(true)
      return
    }
    setIsScrolledLeft(false)
    setIsScrolledRight(false)
  }
  console.log({isScrolledLeft, isScrolledRight})
  return (
    <Flex {...props} position='relative' borderBottom="4px" borderColor="brand.red">
      <NavIndicator transform={`scale(-1) translateX(${isScrolledRight ? '0' : '100%'})`} left='0' />
      <NavIndicator transform={`translateX(${isScrolledLeft ? '0' : '100%'})`} right='0' />
      <Flex maxW="100vw" overflowX='scroll' onScroll={handleScroll}>
        {actionItems.map(({ label, action, icon, color, url }) => (
          <CtaItem label={label} action={action} icon={icon} color={color} url={url} />
        ))}
      </Flex>
    </Flex>
  )
}