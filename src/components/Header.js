import React, { useState } from 'react'
import clsx from 'clsx'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import CssBaseline from '@material-ui/core/CssBaseline'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined'
import { Button, TextField } from '@material-ui/core'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import SearchIcon from '@material-ui/icons/Search'
import logo from '../components/images/Logo.png'
import {
  HOME_ROUTE,
  ABOUT_ROUTE,
  CATEGORIES_ROUTE,
  AUTH_ROUTE,
  BOOK_ROUTE,
} from './constantes/constants'
import fire from '../fire'
import { useDispatch, useSelector } from 'react-redux'
import { editSignPath } from '../redux/pathSlice'
import { editHasAccount, selectHasAccount } from '../redux/hasAccountSlice'

const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    justifyContent: 'space-between',
    justifyContentjustifyContent: 'space-between',
    background: 'linear-gradient(45deg, #FE6B8B 40%, #FF8E53 90%)',
    border: 5,
    justifyContent: 'center',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 50,
    padding: '20px 50px',
    size: '200px',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  },
  collectionsButton: {
    backgroundColor: '#f2eff0;',
    borderRadius: '10px',
    padding: '5px',
    marginTop: '10px',
    fontSize: 'initial',
    fontFamily: 'system-ui',
    color: '#ff7e6e',
  },
  buttonsSide: {
    display: 'grid',
    marginTop: '495px',
  },
  title: {
    flexGrow: 1,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolBar: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  drawerHeader: {
    justifyContent: 'space-between',
    display: 'flex',
    alignItems: 'center',
    justifyContentjustifyContent: 'space-between',
    background: 'linear-gradient(10deg, #FE6B8B 0%, #FF8E53  0%)',
    border: 5,
    justifyContent: 'center',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '25px 50px',
    size: '400px',
  },
  buttonStile: {
    display: 'flex',
    alignItems: 'center',
    justifyContentjustifyContent: 'space-between',
    background: 'linear-gradient(60deg, #FE6B8B 40%, #FF8E53 90%)',
    border: 5,
    borderRadius: 15,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '20px 50px',
    size: '200px',
    margin: theme.spacing(0, 0, 1),
  },
  logo: {
    marginTop: '-60px',
    height: '100px',
    width: '300px',
    marginInlineEnd: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
}))

function Header() {
  const classes = useStyles()
  const theme = useTheme()
  const [open, setOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const history = useHistory()
  const hasAccount = useSelector(selectHasAccount)
  const dispatch = useDispatch()

  const onSignout = () => {
    fire.auth().signOut()
    dispatch(editHasAccount(false))
  }
  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  const onSignin = () => {
    dispatch(editSignPath('signin'))
    history.push(AUTH_ROUTE)
  }

  const onSignup = () => {
    dispatch(editSignPath('signup'))
    history.push(AUTH_ROUTE)
  }

  const onHomeRoute = () => {
    history.push(HOME_ROUTE)
  }
  const onAboutRoute = () => {
    history.push(ABOUT_ROUTE)
  }
  const onCategoriesRoute = () => {
    history.push(CATEGORIES_ROUTE)
  }
  const onBooksRoute = () => {
    history.push(BOOK_ROUTE)
  }

  const logoClick = () => {
    history.push(HOME_ROUTE)
  }

  const onSearch = () => {
    if (!searchOpen) {
      setSearchOpen(true)
      return
    }
    setSearchOpen(false)
  }
  return (
    <div className={classes.root}>
      <CssBaseline />

      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar className={classes.toolBar}>
          <a className={classes.logo} href={HOME_ROUTE}>
            {' '}
            <img cursor="pointer" onClick={logoClick} alt="" src={logo} />{' '}
          </a>

          {searchOpen === true && <TextField label="  Search..." />}

          <Button>
            {' '}
            <SearchIcon style={{ color: 'white' }} onClick={onSearch} />{' '}
          </Button>
          {hasAccount === true && (
            <Button>
              <ExitToAppOutlinedIcon
                style={{ color: 'white' }}
                onClick={onSignout}
              >
                Sign Out
              </ExitToAppOutlinedIcon>{' '}
            </Button>
          )}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            className={clsx(open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      />
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Button className={classes.collectionsButton} onClick={onHomeRoute}>
          Home
        </Button>
        <Button className={classes.collectionsButton} onClick={onBooksRoute}>
          Books
        </Button>

        <Button
          className={classes.collectionsButton}
          onClick={onCategoriesRoute}
        >
          Categories
        </Button>
        <Button className={classes.collectionsButton} onClick={onAboutRoute}>
          About
        </Button>
        <div className={classes.buttonsSide}>
          {hasAccount === false && (
            <Button
              onClick={onSignin}
              variant="contained"
              className={classes.buttonStile}
            >
              Sign In
            </Button>
          )}

          {hasAccount === false && (
            <Button
              onClick={onSignup}
              variant="contained"
              className={classes.buttonStile}
            >
              Sign Up
            </Button>
          )}
        </div>
        <Divider />
      </Drawer>
    </div>
  )
}

export default Header
