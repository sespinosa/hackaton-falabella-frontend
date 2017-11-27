import React from 'react'
import { Grid, Container, Card, Icon, Label, Image, Header } from 'semantic-ui-react'

const falabella_url = 'http://www.falabella.com'

export default (props) => (
  <Container>
    <Grid columns={4} stackable>
      { props.results && props.results.map(r =>
          <Grid.Column key={r.productId}>
            <Card>
              <Label attached='top right' color={r.rating > 2.5 ? 'green' : 'red'}>{r.rating}</Label>
              <img src={`/images/${r.productId}?w=290&h=290`} />
              <Card.Content>
                <Card.Header>
                  <a href={`${falabella_url}${r.url}`}>{r.title}</a>
                </Card.Header>
                <Card.Meta>
                  <span className='date'>
                    {r.brand}
                  </span>
                </Card.Meta>
                <Card.Description>
                  {
                    r.prices.map(p =>
                      <Header as='h6'>{`${p.label.trim() === '' ? 'Oferta CMR' : p.label.replace('(', '').replace(')', '')}:  $${p.originalPrice}`}</Header>
                    )
                  }
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <a>
                  <Icon name='user' />

                </a>
              </Card.Content>
            </Card>
          </Grid.Column>
        )
      }
    </Grid>
  </Container>
)