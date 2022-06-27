import Image from 'next/image'
import { Col, Row, Card } from 'react-bootstrap'

import LogoLeft from 'assets/svg/logo-left.svg'
import LogoRight from 'assets/svg/logo-right.svg'
import { HeaderCardProps } from '~/types/index'

export const HeaderCard: React.FC<{ props: HeaderCardProps }> = ({ props }) => {
  return (
    <Card className="headerCard">
      {props.headTitle !== undefined && (
        <Card.Title className="headerCard__headerTitle">
          {props.headTitle}
        </Card.Title>
      )}
      <div className="headerCard__container">
        <Row>
          <Col xs={2} style={{ textAlign: 'end', alignSelf: 'center' }}>
            <Image
              src={LogoLeft}
              className="headerCard__logoLeft"
              alt="logo-left"
            />
          </Col>
          <Col xs={8}>
            <Card.Text className="headerCard__title">{props.title}</Card.Text>
          </Col>
          <Col xs={2} style={{ alignSelf: 'center' }}>
            <Image
              src={LogoRight}
              className="headerCard__logoRight"
              alt="logo-right"
            />
          </Col>
        </Row>
      </div>
      {props.content !== undefined &&
        props.content.split('\n').map((text, key) => (
          <p key={key} className="headerCard__contents">
            {text}
          </p>
        ))}
    </Card>
  )
}

export default HeaderCard
