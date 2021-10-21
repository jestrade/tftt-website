import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// Styles
import '@styles/global.scss'
import { GlobalStyles } from '@styles/GlobalStyles'
// Components
import Layout from '@containers/Layout'
import Home from '@pages/Home'
import SignUpForm from '@components/SignUpForm'

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/signup' component={SignUpForm} />
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default App
