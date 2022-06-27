import './HeaderCard.css'

import { Col, Row, Card } from 'react-bootstrap'

import LogoLeft from 'assets/svg/logo-left.svg'
import LogoRight from 'assets/svg/logo-right.svg'
import { HeaderCardProps } from '~/types/index'

export const HeaderCard: React.FC<{ props: HeaderCardProps }> = ({ props }) => {
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
            <img src={LogoLeft} alt="" className="header-card__logo-left" />
          </Col>
          <Col xs={8}>
            <Card.Text className="header-card__title">{props.title}</Card.Text>
          </Col>
          <Col xs={2} style={{ alignSelf: 'center' }}>
            <img src={LogoRight} alt="" className="header-card__logo-right" />
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

export default HeaderCard
