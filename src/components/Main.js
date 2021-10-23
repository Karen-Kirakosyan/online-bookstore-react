import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import About from './About.js'
import Home from './Home'
import News from './News'
import {
  HOME_ROUTE,
  ABOUT_ROUTE,
  NEWS_ROUTE,
  BOOK_ROUTE,
} from './constantes/constants'
import Header from './Header'
import Book from './Book.js'

function Main() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path={HOME_ROUTE}>
          <Home />
        </Route>
        <Route path={ABOUT_ROUTE}>
          <About />
        </Route>
        <Route path={BOOK_ROUTE}>
          <Book />
        </Route>
        <Route path={NEWS_ROUTE}>
          <News />
        </Route>
        <Redirect to={HOME_ROUTE} />
      </Switch>
    </>
  )
}
export default Main
