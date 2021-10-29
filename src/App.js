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
import { editHasAccount, selectHasAccount } from './redux/hasAccountSlice'
import { useDispatch, useSelector } from 'react-redux'
// function App() {
//   return (
//     <Switch>
//       <Route exact path={HOME_ROUTE}>
//         <Main />
//       </Route>
//       <Route path={ABOUT_ROUTE}>
//         <Main />
//       </Route>
//       <Route path={BOOK_ROUTE}>
//         <Book />
//       </Route>
//       <Route path={NEWS_ROUTE}>
//         <Main />
//       </Route>
//       <Route path={AUTH_ROUTE}>
//         <Auth />
//       </Route>
//       <Route exact path={SIGN_IN_ROUTE}>
//         <Auth />
//       </Route>
//       <Route path={SIGN_UP_ROUTE}>
//         <Auth />
//       </Route>
//     </Switch>
//   )
// }

// export default App
function App() {
  const hasAccount = useSelector(selectHasAccount)
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
      <Route path={AUTH_ROUTE}>{hasAccount ? <Main /> : <Auth />}</Route>
      <Route exact path={SIGN_IN_ROUTE}>
        {hasAccount ? <Main /> : <Auth />}
      </Route>
      <Route path={SIGN_UP_ROUTE}>{hasAccount ? <Main /> : <Auth />}</Route>
    </Switch>
  )
}

export default App
