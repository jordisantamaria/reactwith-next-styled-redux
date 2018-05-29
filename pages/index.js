import React from 'react'
import {connect} from 'react-redux'
import styled, {ThemeProvider} from 'styled-components'

import {loadData, startClock, tickClock} from '../actions'
import Page from '../components/page'

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
      <Title>Hello styled</Title>
{/*
      <Page title='Index Page' linkTo='/other' NavigateTo='Other Page' />
*/}
    </ThemeProvider>
    )
  }
}

export default connect()(Index)
