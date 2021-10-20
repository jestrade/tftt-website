import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

//Styles
import '@styles/global.scss'

//Components
import Layout from '@containers/Layout'
import Home from '@pages/Home'


const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default App