import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// Components
import Layout from '@containers/Layout'
import Home from '@pages/Home'
import ImJustBaitPage from '@pages/ImJustBait'
import SignUpPage from '@pages/SignUp'
import { Partnerships } from '@pages/Partnerships'
import { Store } from '@pages/Store'
import { News } from '@pages/News'
import { Contact } from '@pages/Contact'
import { Gallery } from '../pages/Gallery'
import useNavbarState from '../hooks/useNavbarState'
import Context from '../context/Context'
import { About } from '../pages/About'

const App = () => {
  const navbarState = useNavbarState()

  return (
    <Context.Provider value={navbarState}>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/im-just-bait' component={ImJustBaitPage} />
            <Route exact path='/signup' component={SignUpPage} />
            <Route path='/partnerships' component={Partnerships} />
            <Route path='/store' component={Store} />
            <Route path='/news' component={News} />
            <Route path='/contact' component={Contact} />
            <Route path='/gallery' component={Gallery} />
            <Route path='/about' component={About} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </Context.Provider>
  )
}

export default App
