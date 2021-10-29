import './App.css'
import { BrowserRouter as Switch, Route } from 'react-router-dom'
import {
  HOME_ROUTE,
  ABOUT_ROUTE,
  NEWS_ROUTE,
  AUTH_ROUTE,
  BOOK_ROUTE,
  SIGN_IN_ROUTE,
  SIGN_UP_ROUTE,
} from './components/constantes/constants'
import Main from './components/Main'
import Book from './components/Book'
import Auth from './components/Auth/Auth'

function App() {
  return (
    <Switch>
      <Route exact path={HOME_ROUTE}>
        <Main />
      </Route>
      <Route path={ABOUT_ROUTE}>
        <Main />
      </Route>
      <Route path={BOOK_ROUTE}>
        <Book />
      </Route>
      <Route path={NEWS_ROUTE}>
        <Main />
      </Route>
      <Route path={AUTH_ROUTE}>
        <Auth />
      </Route>
      <Route exact path={SIGN_IN_ROUTE}>
        <Auth />
      </Route>
      <Route path={SIGN_UP_ROUTE}>
        <Auth />
      </Route>
    </Switch>
  )
}

export default App
