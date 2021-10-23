import React from 'react'
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
import { Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
import {
  HOME_ROUTE,
  ABOUT_ROUTE,
  NEWS_ROUTE,
  SIGN_IN_ROUTE,
  SIGN_UP_ROUTE,
} from './constantes/constants'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

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
    height: 48,
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
  link: {
    marginLeft: 10,
    marginRight: 10,
    color: 'white',
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
    background: 'linear-gradient(45deg, #FE6B8B 40%, #FF8E53 90%)',
    border: 5,
    justifyContent: 'center',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '20px 50px',
    size: '200px',
    // display: 'flex',
    // alignItems: 'center',
    // padding: theme.spacing(0, 1),
    // // necessary for content to be below app bar
    // ...theme.mixins.toolbar,
    // justifyContent: 'flex-start',
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

export default function PersistentDrawerRight() {
  const classes = useStyles()
  const theme = useTheme()
  const [open, setOpen] = React.useState(false)

  const history = useHistory()
  const onSignout = () => {
    localStorage.removeItem('token')
    history.push(SIGN_IN_ROUTE)
  }
  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
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
          {/* <h2 className={classes.h2}>Hend Libruary</h2> */}

          <Link className={classes.link} to={HOME_ROUTE}>
            Home
          </Link>
          <Link className={classes.link} to={ABOUT_ROUTE}>
            About
          </Link>
          <Link className={classes.link} to={NEWS_ROUTE}>
            News
          </Link>
          <ExitToAppOutlinedIcon onClick={onSignout}>
            Sign Out
          </ExitToAppOutlinedIcon>
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
        <Divider />
        <Button>sign in</Button>
        <Divider />
      </Drawer>
    </div>
  )
}
