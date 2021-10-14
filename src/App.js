import './App.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import About from './components/About'
import Categories from './components/Categories'
import {
  HOME_ROUTE,
  ABOUT_ROUTE,
  CATEGORIES_ROUTE,
  SIGN_IN_ROUTE,
  SIGN_UP_ROUTE,
} from './components/constantes/constants'
import Main from './components/Main'
import Auth from './components/Auth'

function App() {
  return (
    <Switch>
      <Route exact path={HOME_ROUTE}>
        <Main />
      </Route>
      <Route path={ABOUT_ROUTE}>
        <About />
      </Route>
      <Route path={CATEGORIES_ROUTE}>
        <Categories />
      </Route>
      <Route path={SIGN_IN_ROUTE}>
        <Auth />
      </Route>
      <Route path={SIGN_UP_ROUTE}>
        <Auth />
      </Route>
    </Switch>
  )
}

export default App
