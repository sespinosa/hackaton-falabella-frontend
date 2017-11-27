import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Container, Segment, Menu, Sidebar, Icon, Image, Header } from 'semantic-ui-react'
import SmallBoxes from './boxes/small'
import BigBox from './boxes/big'
import {
  ceci_open,
  ceci_close,
  ceci_toggle,
  ceci_listen_on,
  ceci_listen_off,
  send_text_to_api
} from '../../modules/ceci'


class Ceci extends Component {

  _handleMenuToggle(e) {
    this.props.ceciMenu ? this.props.ceci_close() : this.props.ceci_open()
  }

  render() {
    return(
      <Container className='ceci-body'>
        <Sidebar.Pushable as={Segment} className='ceci-body'>
          <Sidebar as={Menu} animation='push' direction='top' visible={this.props.ceciMenu} className='mic-container'>
            <Container textAlign='center' className='full-width'>
              <Icon color={this.props.ceciListening ? 'green' : 'red'} name='microphone' size='huge' />
            </Container>
          </Sidebar>
          <Sidebar.Pusher className='ceci-pusher'>
            <Segment basic>
            <Menu borderless>
              <Menu.Item name='editorials' onClick={this._handleMenuToggle.bind(this)}>
                <Icon name={this.props.ceciMenu ? 'angle double up' : 'angle double down'} size='big' />
              </Menu.Item>
              <Menu.Item>
                { this.props.ceciSTT[0] }
              </Menu.Item>
            </Menu>
              {
                this.props.hasResults
                ?
                (
                  this.props.showBig
                  ?
                  <BigBox result={this.props.results[0]} />
                  :
                  <SmallBoxes results={this.props.results} />
                )
                :
                <img className='logo-placeholder' src='http://www.fashionfan.com.ar/wp-content/uploads/2015/09/Falabella-logo.jpg'/>
              }
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  ceciMenu: state.ceci.ceciMenu,
  ceciListening: state.ceci.ceciListening,
  ceciSTT: state.ceci.ceciSTT,
  hasResults: state.ceci.hasResults,
  results: state.ceci.results,
  showBig: state.ceci.showBig
})


const mapDispatchToProps = dispatch => bindActionCreators({
  ceci_open,
  ceci_close,
  ceci_toggle,
  ceci_listen_on,
  ceci_listen_off,
  send_text_to_api
}, dispatch)


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Ceci)