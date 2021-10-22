import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// Components
import Layout from '@containers/Layout'
import Home from '@pages/Home'
import ImJustBaitPage from '@pages/ImJustBait'
import SignUpForm from '@components/SignUpForm'
import { Partnerships } from '@pages/Partnerships'
import { Store } from '@pages/Store'
import { News } from '@pages/News'
import { Contact } from '@pages/Contact'

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/im-just-bait' component={ImJustBaitPage} />
          <Route exact path='/signup' component={SignUpForm} />
          <Route path='/partnerships' component={Partnerships} />
          <Route path='/store' component={Store} />
          <Route path='/news' component={News} />
          <Route path='/contact' component={Contact} />
        </Switch>
      </Layout>

    </BrowserRouter>
  )
}

export default App
