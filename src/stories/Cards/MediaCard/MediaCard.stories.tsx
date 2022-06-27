import { ComponentStory, ComponentMeta } from '@storybook/react'

import { MediaCard } from './'

const MediaCardRender: React.FC<{
  children?: React.ReactNode
  image: string
  size: 's' | 'm' | 'l'
  open: boolean
  title: string
  canOpen: boolean
}> = ({ children, ...props }) => {
  return <MediaCard props={props}>{children}</MediaCard>
}

const Template: ComponentStory<typeof MediaCardRender> = ({
  children,
  ...args
}) => <MediaCardRender {...args}>{children}</MediaCardRender>

export const MembersCard = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
MembersCard.args = {
  size: 's',
  title: 'FirstName LastName',
  open: true,
  canOpen: true,
  children: 'SOME DETAILS'
}

export const EventsCard = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
EventsCard.args = {
  size: 'm',
  title: '#1 Python for Babies',
  open: true,
  canOpen: true,
  children: (
    <>
      <div className="media-card__tags">
        <div className="media-card__tag">Python</div>
        <div className="media-card__tag">Beginner</div>
      </div>
      <div className="media-card__date">2021/11/26 Fri 18:30~</div>
      <div className="media-card__details">Sample Details of the Events.</div>
    </>
  )
}

export default {
  title: 'Cards/MediaCard',
  component: MediaCard,
  argTypes: {
    size: { options: ['s', 'm', 'l'], control: { type: 'radio' } },
    title: { control: 'text' },
    open: { control: 'boolean' },
    canOpen: { control: 'boolean' }
  }
} as ComponentMeta<typeof MediaCard>
