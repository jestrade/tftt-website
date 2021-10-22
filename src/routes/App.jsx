import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// Styles
import '@styles/global.scss'
import { GlobalStyles } from '@styles/GlobalStyles'
// Components
import Layout from '@containers/Layout'
import Home from '@pages/Home'
import ImJustBaitPage from '@pages/ImJustBait'

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/im-just-bait' component={ImJustBaitPage} />
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default App
