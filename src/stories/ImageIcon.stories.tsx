import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Link, MemoryRouter } from 'react-router-dom'

import { ImageIcon } from 'components/ImageIcon'

const ImageIconRender: React.FC<{
  children?: React.ReactNode
  image: string
  size: 's' | 'm' | 'l'
  color: 'red' | 'green' | 'blue' | 'yellow'
  title: string
}> = ({ children, ...props }) => {
  return <ImageIcon props={props}>{children}</ImageIcon>
}

const Template: ComponentStory<typeof ImageIconRender> = ({
  children,
  ...args
}) => <ImageIconRender {...args}>{children}</ImageIconRender>
export const Large = Template.bind({})

Large.args = {
  size: 'l',
  title: 'Team Name',
  children: <Link to="/">Learn More?</Link>
}

export const Medium = Template.bind({})

Medium.args = {
  size: 'm',
  title: 'Team Name'
}

export const Small = Template.bind({})
Small.args = {
  size: 's',
  title: 'Team Name'
}

export default {
  title: 'Icon/ImageIcon',
  component: ImageIcon,
  argTypes: {
    size: { options: ['s', 'm', 'l'], control: { type: 'radio' } },
    title: { control: 'text' },
    image: { control: 'text' },
    color: {
      options: ['red', 'yellow', 'blue', 'green'],
      control: { type: 'radio' }
    }
  },
  decorators: [
    Story => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    )
  ]
} as ComponentMeta<typeof ImageIcon>
