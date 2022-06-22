import 'components/Cards/HeaderCard/HeaderCard.css'

import React from 'react'

import { Col, Row, Card } from 'react-bootstrap'

import LogoLeft from 'assets/svg/logo-left.svg'
import LogoRight from 'assets/svg/logo-right.svg'
import { ComponentStory, ComponentMeta } from '@storybook/react'

const HeaderCard: React.FC<{
  headTitle: string
  content: string
  title: string
}> = ({ ...props }) => {
  return (
    <Card className="header-card">
      {props.headTitle !== undefined && (
        <Card.Title className="header-card__header-title">
          {props.headTitle}
        </Card.Title>
      )}
      <div className="header-card__container">
        <Row>
          <Col xs={2} style={{ textAlign: 'end', alignSelf: 'center' }}>
            <img src={LogoLeft} className="header-card__logo-left" />
          </Col>
          <Col xs={8}>
            <Card.Text className="header-card__title">{props.title}</Card.Text>
          </Col>
          <Col xs={2} style={{ alignSelf: 'center' }}>
            <img src={LogoRight} className="header-card__logo-right" />
          </Col>
        </Row>
      </div>
      {props.content !== undefined &&
        props.content.split('\n').map((text, key) => (
          <p key={key} className="header-card__contents">
            {text}
          </p>
        ))}
    </Card>
  )
}

const Template: ComponentStory<typeof HeaderCard> = args => (
  <HeaderCard {...args} />
)

export const DefaultCard = Template.bind({})
DefaultCard.args = {
  headTitle: '',
  title: 'About Us',
  content: "Waseda University's chapter of the Google Developer Student Club"
}

export default {
  title: 'Cards/HeaderCard',
  component: HeaderCard,
  argTypes: {
    headTitle: { control: 'text' },
    title: { control: 'text' },
    content: { control: 'text' }
  }
} as ComponentMeta<typeof HeaderCard>
