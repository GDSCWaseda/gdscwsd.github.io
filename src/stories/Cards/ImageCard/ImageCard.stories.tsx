import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ImageCard } from './'

const ImageCardRender: React.FC<{
  children?: React.ReactNode
  image: string
  title: string
  imagePosition: 'left' | 'right'
  content: string
}> = ({ children, ...props }) => {
  return <ImageCard props={props}>{children}</ImageCard>
}

const Template: ComponentStory<typeof ImageCardRender> = ({
  children,
  ...args
}) => <ImageCardRender {...args}>{children}</ImageCardRender>

export const DefaultCard = Template.bind({})
DefaultCard.args = {
  title: 'Google Developer Student Clubs',
  content:
    'Google Developer Student Clubs are university-based community groups supported by Google Developers intending to empower student developers and strengthen their leadership skills\nHere at GDSC Waseda, by collaborating with Google, we will organize many exciting events such as speaker sessions, hackathons, introductory hands-on workshops, study sessions, and so on',
  image: 'group-highfive.png',
  imagePosition: 'left',
  children: 'ADDITIONAL Components'
}

export default {
  title: 'Cards/ImageCard',
  component: ImageCard,
  argTypes: {
    title: { control: 'text' },
    content: { control: 'text' },
    image: { control: 'text' },
    children: { control: 'text' },
    imagePosition: {
      options: ['left', 'right'],
      control: { type: 'radio' }
    }
  }
} as ComponentMeta<typeof ImageCard>
