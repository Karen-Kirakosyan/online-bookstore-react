import React from 'react'
import {
  SIGN_IN_ROUTE,
  SIGN_UP_ROUTE,
  HOME_ROUTE,
} from './constantes/constants'
import {
  BrowserRouter as Redirect,
  Switch,
  Route,
  Link,
} from 'react-router-dom'
import SignIn from './constantes/AUTH/SignIn'
import SignUp from './constantes/AUTH/SignUp'

function Auth() {
  return (
    <Switch>
      <Route exact path={SIGN_IN_ROUTE}>
        <SignIn />
      </Route>
      <Route path={SIGN_UP_ROUTE}>
        <SignUp />
      </Route>
      <Redirect to={HOME_ROUTE} />
    </Switch>
  )
}

export default Auth
