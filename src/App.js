// import './App.css'
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
// import About from './components/About'
// import Categories from './components/Categories'
// import {
//   HOME_ROUTE,
//   ABOUT_ROUTE,
//   CATEGORIES_ROUTE,
//   SIGN_IN_ROUTE,
//   SIGN_UP_ROUTE,
//   BOOK_ROUTE,
// } from './components/constantes/constants'
// import Main from './components/Main'
// import Auth from './components/Auth'
// import Header from './components/Header'

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
//         <Main />
//       </Route>
//       <Route path={CATEGORIES_ROUTE}>
//         <Main />
//       </Route>
//       <Route path={SIGN_IN_ROUTE}>
//         <Auth />
//       </Route>
//       <Route path={SIGN_UP_ROUTE}>
//         <Auth />
//       </Route>
//     </Switch>
//   )
// }

// export default App
/* eslint-disable*/
import './App.css'
import { BrowserRouter as Switch, Route, useHistory } from 'react-router-dom'
import {
  HOME_ROUTE,
  ABOUT_ROUTE,
  CATEGORIES_ROUTE,
  AUTH_ROUTE,
  BOOK_ROUTE,
} from './components/constantes/constants'
import Main from './components/Main'
import Auth from './components/Auth'
import fire from './fire'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { editHasAccount } from './redux/hasAccountSlice'
import Book from './components/Book'

function App() {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [renderComponent, setRenderComponent] = useState('signin')
  const history = useHistory()
  const dispatch = useDispatch()

  const clearInputs = () => {
    setEmail('')
    setPassword('')
  }

  const clearErrors = () => {
    setEmailError('')
    setPasswordError('')
  }

  const handleLogin = () => {
    clearErrors()
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case 'auth/invalid-email':
          case 'auth/user-disabled':
          case 'auth/user-not-found':
            setEmailError(err.message)
            break
          case 'auth/wrong-password':
            setPasswordError(err.message)
            break
        }
      })
  }

  const handleSignup = () => {
    clearErrors()
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case 'auth/email-already-in-use':
          case 'auth/invalid-email':
            setEmailError(err.message)
            break
          case 'auth/weak-password':
            setPasswordError(err.message)
            break
        }
      })
  }

  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInputs()
        setUser(user)
        dispatch(editHasAccount(true))
        history.push(HOME_ROUTE)
      } else {
        dispatch(editHasAccount(false))
        // alert('user is ' + user);
        setUser('')
      }
    })
  }

  useEffect(() => {
    authListener()
  }, [])

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
      <Route path={CATEGORIES_ROUTE}>
        <Main />
      </Route>
      <Route path={AUTH_ROUTE}>
        <Auth
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          handleLogin={handleLogin}
          handleSignup={handleSignup}
          emailError={emailError}
          passwordError={passwordError}
          renderComponent={renderComponent}
          setRrenderComponent={setRenderComponent}
          user={user}
        />
      </Route>
    </Switch>
  )
}

export default App
