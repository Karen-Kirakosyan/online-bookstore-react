import { ButtonBase, IconButton } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

import React from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

import {
  HOME_ROUTE,
  ABOUT_ROUTE,
  CATEGORIES_ROUTE,
  SIGN_IN_ROUTE,
  SIGN_UP_ROUTE,
} from './constantes/constants'

const useStyles = makeStyles(() => {
  return {
    root: {
      display: 'flex',
      alignItems: 'center',
      justifyContentjustifyContent: 'space-between',
      background: 'linear-gradient(45deg, #FE6B8B 40%, #FF8E53 90%)',
      border: 5,
      borderRadius: 300,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 48,
      padding: '20px 50px',
      size: '150px',
    },
    link: {
      marginLeft: 10,
      marginRight: 10,
      color: 'white',
    },
    h2: {
      marginLeft: 20,
      marginRight: 50,
    },
  }
})

function Header() {
  const classes = useStyles()
  const history = useHistory()
  const onSignout = () => {
    localStorage.removeItem('token')
    history.push(SIGN_IN_ROUTE)
  }

  return (
    <div className={classes.root}>
      <h2 className={classes.h2}>Hend Libruary</h2>
      <div>
        <Link className={classes.link} to={HOME_ROUTE}>
          Home
        </Link>
        <Link className={classes.link} to={ABOUT_ROUTE}>
          About
        </Link>
        <Link className={classes.link} to={CATEGORIES_ROUTE}>
          Categories
        </Link>
        <IconButton onClick={onSignout} variant="contained">
          Sign Out
        </IconButton>
      </div>
    </div>
  )
}
export default Header
