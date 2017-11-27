import React from 'react'
import { Container, Card, Header, Icon, Label } from 'semantic-ui-react'

const falabella_url = 'http://www.falabella.com'

export default (props) => (
  <Container>
    <Card className='card-single-item' centered>
      <Label attached='top right' color={props.result.rating > 2.5 ? 'green' : 'red'}>{props.result.rating}</Label>
      <img src={`/images/${props.result.productId}?w=700&h=700`} />
      <Card.Content>
        <Card.Header>
          <a href={`${falabella_url}${props.result.url}`}>{props.result.title}</a>
        </Card.Header>
        <Card.Meta>
          <span className='date'>
            {props.result.brand}
            <Header as='h5'>sku: {props.result.skuId}</Header>
          </span>
        </Card.Meta>
        <Card.Description>
          {
            props.result.prices.map(p =>
              <Header as='h3'>{`${p.label.trim() === '' ? 'Oferta CMR' : p.label.replace('(', '').replace(')', '')}:  $${p.originalPrice}`}</Header>
            )
          }
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
        </a>
      </Card.Content>
    </Card>
  </Container>
)