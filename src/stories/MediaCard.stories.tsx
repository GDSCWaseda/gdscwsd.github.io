import { ComponentStory, ComponentMeta } from '@storybook/react'

/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-var-requires */
import 'components/Cards/MediaCard/MediaCard.css'

import Collapse from '@mui/material/Collapse'
import { ArrowDropDown, ArrowDropUp } from '@mui/icons-material'

import React, { useState } from 'react'

const MediaCard: React.FC<{
  children?: React.ReactNode
  image: string
  size: 's' | 'm' | 'l'
  open: boolean
  title: string
  canOpen: boolean
}> = ({ children, ...props }) => {
  const Image =
    props.image !== undefined ? require(`assets/img/${props.image}`) : null

  const [open, setOpen] = useState(props.open)

  const onClick = () => setOpen(!open)

  return (
    <div className={`media-card ${props.size}`}>
      {props.image !== undefined ? (
        <div className={`media-card__image-container ${props.size}`}>
          <img className={`media-card__image ${props.size}`} src={Image} />
        </div>
      ) : (
        <div className={`media-card__image-container ${props.size} none`} />
      )}
      <div className="media-card__detail-container" onClick={onClick}>
        {props.title !== undefined && (
          <>
            {props.canOpen && (
              <div className="media-card__collapse">
                <div className="media-card__collapse-container">
                  {children !== undefined && open ? (
                    <ArrowDropUp />
                  ) : (
                    <ArrowDropDown />
                  )}
                </div>
              </div>
            )}
            <div className="media-card__title">{props.title}</div>
          </>
        )}
        <Collapse in={props.canOpen && open} timeout="auto" unmountOnExit>
          <div className={`media-card__other`}>
            {children !== undefined && children}
          </div>
        </Collapse>
      </div>
    </div>
  )
}

const Template: ComponentStory<typeof MediaCard> = ({ children, ...args }) => (
  <MediaCard {...args}>{children}</MediaCard>
)

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
    canOpen: { control: 'boolean' },
  },
  parameters: { actions: { argTypesRegex: '^on.*' } },
} as ComponentMeta<typeof MediaCard>
