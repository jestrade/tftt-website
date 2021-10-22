import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// Components
import Layout from '@containers/Layout'
import Home from '@pages/Home'
import SignUpForm from '@components/SignUpForm'
import { Partnerships } from '@pages/Partnerships'
import { Store } from '@pages/Store'
import { News } from '@pages/News'
import { Contact } from '@pages/Contact'
import { Gallery } from '../pages/Gallery'

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/signup' component={SignUpForm} />
          <Route path='/partnerships' component={Partnerships} />
          <Route path='/store' component={Store} />
          <Route path='/news' component={News} />
          <Route path='/contact' component={Contact} />
          <Route path='/gallery' component={Gallery} />
        </Switch>
      </Layout>

    </BrowserRouter>
  )
}

export default App
