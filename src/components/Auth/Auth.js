// import React from 'react'
// import Avatar from '@material-ui/core/Avatar'
// import Button from '@material-ui/core/Button'
// import CssBaseline from '@material-ui/core/CssBaseline'
// import TextField from '@material-ui/core/TextField'
// import FormControlLabel from '@material-ui/core/FormControlLabel'
// import Checkbox from '@material-ui/core/Checkbox'
// import Link from '@material-ui/core/Link'
// import Grid from '@material-ui/core/Grid'
// import Box from '@material-ui/core/Box'
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
// import Typography from '@material-ui/core/Typography'
// import { makeStyles } from '@material-ui/core/styles'
// import Container from '@material-ui/core/Container'

// import { useDispatch, useSelector } from 'react-redux'
// import { editSignPath, selectSignPath } from '../redux/pathSlice'

// function Copyright(props) {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   )
// }

// const useStyles = makeStyles((theme) => ({
//   paper: {
//     marginTop: theme.spacing(8),
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//   },
//   avatar: {
//     margin: theme.spacing(1),
//     backgroundColor: theme.palette.secondary.main,
//   },
//   form: {
//     width: '100%', // Fix IE 11 issue.
//     marginTop: theme.spacing(1),
//   },
//   submit: {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContentjustifyContent: 'space-between',
//     background: 'linear-gradient(45deg, #FE6B8B 40%, #FF8E53 90%)',
//     border: 5,
//     borderRadius: 300,
//     boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
//     color: 'white',
//     height: 48,
//     padding: '20px 50px',
//     size: '150px',
//     margin: theme.spacing(3, 0, 2),
//   },
// }))

// function Auth(props) {
//   const {
//     setEmail,
//     setPassword,
//     handleLogin,
//     handleSignup,
//     emailError,
//     passwordError,
//   } = props

//   const path = useSelector(selectSignPath)
//   const dispatch = useDispatch()

//   const onEmailType = (e) => {
//     setEmail(e.target.value)
//   }
//   const onPasswordType = (e) => {
//     setPassword(e.target.value)
//   }
//   const classes = useStyles()

//   const onClickSignupLink = () => {
//     if (path !== 'signup') {
//       dispatch(editSignPath('signup'))
//     }
//   }

//   const onClickSigninLink = () => {
//     if (path !== 'signin') {
//       dispatch(editSignPath('signin'))
//     }
//   }

//   return (
//     <>
//       {path === 'signin' ? (
//         <Container component="main" maxWidth="xs">
//           <CssBaseline />
//           <div className={classes.paper}>
//             <Avatar className={classes.avatar}>
//               <LockOutlinedIcon />
//             </Avatar>
//             <Typography component="h1" variant="h5">
//               Sign in
//             </Typography>
//             <form className={classes.form} noValidate>
//               <TextField
//                 onChange={onEmailType}
//                 variant="outlined"
//                 margin="normal"
//                 required
//                 fullWidth
//                 id="email"
//                 label="Email Address"
//                 name="email"
//                 autoComplete="email"
//                 autoFocus
//               >
//                 <p>{emailError}</p>
//               </TextField>
//               <TextField
//                 onChange={onPasswordType}
//                 variant="outlined"
//                 margin="normal"
//                 required
//                 fullWidth
//                 name="password"
//                 label="Password"
//                 type="password"
//                 id="password"
//                 autoComplete="current-password"
//               >
//                 <p>{passwordError}</p>
//               </TextField>
//               <FormControlLabel
//                 control={<Checkbox value="remember" color="primary" />}
//                 label="Remember me"
//               />
//               <Button
//                 type="submit"
//                 fullWidth
//                 variant="contained"
//                 color="primary"
//                 className={classes.submit}
//                 onClick={handleLogin}
//               >
//                 Sign In
//               </Button>
//               <Button
//                 type="submit"
//                 fullWidth
//                 variant="contained"
//                 color="primary"
//                 className={classes.submit}
//                 onClick={onClickSignupLink}
//               >
//                 Sign Up
//               </Button>
//               <Grid container>
//                 <Grid item xs>
//                   <Link href="#" variant="body2">
//                     Forgot password?
//                   </Link>
//                 </Grid>
//                 <Grid item>
//                   {/* <Link onClick={onClickSignupLink} href="#" variant="body2">
//                 {"Don't have an account? Sign Up"}
//               </Link> */}
//                 </Grid>
//               </Grid>
//             </form>
//           </div>
//           <Box mt={8}>
//             <Copyright />
//           </Box>
//         </Container>
//       ) : (
//         <Container component="main" maxWidth="xs">
//           <CssBaseline />
//           <div className={classes.paper}>
//             <Avatar className={classes.avatar}>
//               <LockOutlinedIcon />
//             </Avatar>
//             <Typography component="h1" variant="h5">
//               Sign up
//             </Typography>
//             <form className={classes.form} noValidate>
//               <Grid container spacing={2}>
//                 <Grid item xs={12} sm={6}>
//                   <TextField
//                     autoComplete="fname"
//                     name="firstName"
//                     variant="outlined"
//                     required
//                     fullWidth
//                     id="firstName"
//                     label="First Name"
//                     autoFocus
//                   />
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                   <TextField
//                     variant="outlined"
//                     required
//                     fullWidth
//                     id="lastName"
//                     label="Last Name"
//                     name="lastName"
//                     autoComplete="lname"
//                   />
//                 </Grid>
//                 <Grid item xs={12}>
//                   <TextField
//                     variant="outlined"
//                     required
//                     fullWidth
//                     id="email"
//                     label="Email Address"
//                     name="email"
//                     autoComplete="email"
//                     onChange={onEmailType}
//                   />
//                   <p>{emailError}</p>
//                 </Grid>
//                 <Grid item xs={12}>
//                   <TextField
//                     variant="outlined"
//                     required
//                     fullWidth
//                     name="password"
//                     label="Password"
//                     type="password"
//                     id="password"
//                     autoComplete="current-password"
//                     onChange={onPasswordType}
//                   />
//                   <p>{passwordError}</p>
//                 </Grid>
//                 <Grid item xs={12}>
//                   <FormControlLabel
//                     control={
//                       <Checkbox value="allowExtraEmails" color="primary" />
//                     }
//                     label="I want to receive inspiration, marketing promotions and updates via email."
//                   />
//                 </Grid>
//               </Grid>
//               <Button
//                 type="submit"
//                 fullWidth
//                 variant="contained"
//                 color="primary"
//                 className={classes.submit}
//                 onClick={handleSignup}
//               >
//                 Sign Up
//               </Button>
//               <Grid container justifyContent="flex-end">
//                 <Grid item>
//                   <Link onClick={onClickSigninLink} href="#" variant="body2">
//                     Already have an account? Sign in
//                   </Link>
//                 </Grid>
//               </Grid>
//             </form>
//           </div>
//           <Box mt={5}>
//             <Copyright />
//           </Box>
//         </Container>
//       )}
//     </>
//   )
// }

// export default Auth

/* eslint-disable default-case */
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter as Switch, Route } from 'react-router-dom'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import fire from '../../fire'
import { editHasAccount } from '../../redux/hasAccountSlice'
import {
  HOME_ROUTE,
  SIGN_IN_ROUTE,
  SIGN_UP_ROUTE,
} from '../constantes/constants'
import Main from '../Main'
import SignIn from './SignIn'
import SignUp from './SignUp'
function Auth() {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [hasAccount, setHasAccount] = useState(false)
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

  const handleLogout = () => {
    fire.auth().signOut()
  }

  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInputs()
        setUser(user)
        history.push(HOME_ROUTE)
        dispatch(editHasAccount(true))
      } else {
        setUser('')
      }
    })
  }

  useEffect(() => {
    authListener()
  }, [])

  return (
    <Switch>
      <Route exact path={SIGN_IN_ROUTE}>
        <SignIn
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          handleLogin={handleLogin}
          handleSignup={handleSignup}
          hasAccount={hasAccount}
          setHasAccount={setHasAccount}
          emailError={emailError}
          passwordError={passwordError}
        />
      </Route>
      <Route path={SIGN_UP_ROUTE}>
        <SignUp
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          handleLogin={handleLogin}
          handleSignup={handleSignup}
          hasAccount={hasAccount}
          setHasAccount={setHasAccount}
          emailError={emailError}
          passwordError={passwordError}
        />
      </Route>
      <Route exact path={HOME_ROUTE}>
        <Main />
      </Route>
    </Switch>
  )
}

export default Auth
