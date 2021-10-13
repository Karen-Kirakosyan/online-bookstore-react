import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Link from '@material-ui/core/Link'
import DownState from './DownState'

const useStyles = makeStyles(() => ({
  header: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: ' #f2ebe9',
    paddingTop: '40px',
    paddingLeft: '40px',
    paddingRight: '40px',
    paddingBottom: '90px',
    marginTop: '10px',
    fontSize: 'xxx-large',
    fontFamily: 'cursive',
  },
  linkStyle: {
    display: 'grid',
    marginLeft: '10px',
    fontSize: 'xx-large',
    fontFamily: 'inherit',
  },
  linkColor: {
    color: '#fe7c6f',
  },
  h3: {
    fontSize: 'xx-large',
    fontFamily: 'revert',
  },
}))

function Categories() {
  const classes = useStyles()
  return (
    <>
      <div>
        <h1 className={classes.header}>Find your favorite book hear</h1>
        <div>
          <h3 className={classes.h3}>Categories</h3>
          <div className={classes.linkStyle}>
            <Link href="#" className={classes.linkColor}>
              History
            </Link>
            <Link href="#" className={classes.linkColor}>
              Fiction
            </Link>
            <Link href="#" className={classes.linkColor}>
              Bussines
            </Link>
            <Link href="#" className={classes.linkColor}>
              Crime
            </Link>
            <Link href="#" className={classes.linkColor}>
              Poetry
            </Link>
          </div>
        </div>
      </div>
      <DownState />
    </>
  )
}

export default Categories
