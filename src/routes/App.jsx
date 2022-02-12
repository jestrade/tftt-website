import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

// Components
import Layout from '@containers/Layout'
import Home from '@pages/Home'
// import ImJustBaitPage from '@pages/ImJustBait'
import SignUpPage from '@pages/SignUp'
import { Partnerships } from '@pages/Partnerships'
import { Store } from '@pages/Store'
import { News } from '@pages/News'
import { Contact } from '@pages/Contact'
import { Gallery } from '../pages/Gallery'
import useNavbarState from '../hooks/useNavbarState'
import Context from '../context/Context'
import { About } from '../pages/About'
import PopUpSignUp from '../components/PopUpContact'
import FilmCoin from '@pages/FilmCoin'

const App = () => {
  const navbarState = useNavbarState()

  return (
    <Context.Provider value={navbarState}>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path='/' component={Home} />
            {/* <Route exact path='/im-just-bait' component={ImJustBaitPage} /> */}
            <Route exact path='/signup' component={SignUpPage} />
            <Route exact path='/partnerships' component={Partnerships} />
            <Route exact path='/store' component={Store} />
            <Route exact path='/news' component={News} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/gallery' component={Gallery} />
            <Route exact path='/about' component={About} />
            <Route exact path='/pop' component={PopUpSignUp} />
            {/* <Route exact path='/filmcoin' component={FilmCoin} /> */}
            <Redirect to='/' />
          </Switch>
        </Layout>
      </BrowserRouter>
    </Context.Provider>
  )
}

export default App
