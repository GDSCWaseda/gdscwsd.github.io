/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-var-requires */

import 'components/ImageIcon/ImageIcon.css'

import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Link, MemoryRouter } from 'react-router-dom'

const ImageIcon: React.FC<{
  children?: React.ReactNode
  image: string
  size: 's' | 'm' | 'l'
  color: 'red' | 'green' | 'blue' | 'yellow'
  title: string
}> = ({ children, ...props }) => {
  const Image =
    props.image !== undefined ? require(`assets/img/${props.image}`) : null

  return (
    <div className={`image-icon ${props.size}`}>
      <div className={`image-icon__image-container ${props.size}`}>
        {props.image !== undefined ? (
          <img
            className={`image-icon__image ${props.size} ${props.color}`}
            src={Image}
          />
        ) : (
          <div className={`image-icon__image ${props.size} ${props.color}`} />
        )}
      </div>
      <div className="image-icon__detail-container">
        {props.title !== undefined && (
          <div className="image-icon__title">{props.title}</div>
        )}
        <div className="image-icon__other">
          {children !== undefined && children}
        </div>
      </div>
    </div>
  )
}

const Template: ComponentStory<typeof ImageIcon> = ({ children, ...args }) => (
  <ImageIcon {...args}>{children}</ImageIcon>
)
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
