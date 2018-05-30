import React from 'react'
import {connect} from 'react-redux'
import styled, {ThemeProvider, injectGlobal} from 'styled-components'

import {loadData, startClock, tickClock} from '../actions'
import Page from '../components/page'
import {BackgroundImage, Box, Card, Small, Subhead, Text} from "rebass";

injectGlobal`
  * { box-sizing: border-box; margin: 0; }
  body { margin: 0; background:aquamarine; }
`
class Index extends React.Component {
  static async getInitialProps (props) {
    const { store, isServer } = props.ctx
    store.dispatch(tickClock(isServer))

    if (!store.getState().placeholderData) {
      store.dispatch(loadData())
    }

    return { isServer }
  }

  componentDidMount () {
    this.props.dispatch(startClock())
  }

  render () {
    const theme = {
      main: 'mediumseagreen'
    };
    const Title = styled.h1`
      color: ${props => props.theme.main};
      font-size: 50px;
      background: #000;
    `
    return (
    <ThemeProvider theme={theme}>
      <div>
        <Title>Hello styled</Title>
        <Box width={1/3} mt={4} ml={'auto'} mr={'auto'}>
          <Card>
            <BackgroundImage src={'static/lolis.jpg'} />
            <Box p={1}>
              <Subhead>Card</Subhead>
              <Small>Small meta text</Small>
              <Text>Small meta text</Text>
            </Box>
          </Card>
        </Box>

      </div>
{/*
      <Page title='Index Page' linkTo='/other' NavigateTo='Other Page' />
*/}
    </ThemeProvider>
    )
  }
}

export default connect()(Index)
