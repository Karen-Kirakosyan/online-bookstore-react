import { makeStyles } from '@material-ui/core'
import React from 'react'
import fbIcon from '../components/images/FB-icon.png'
import instaIcon from '../components/images/Insta-icon.png'
import logo from '../components/images/Logo-2.png'
const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: '#e1e0e0',
    marginTop: '40px',
  },
  h1: {
    fontSize: 'xx-large',
    fontFamily: 'none',
    marginLeft: '10px',
  },
  info: {
    fontSize: 'medium',
    fontFamily: 'cursive',
    marginLeft: '20px',
  },
  downDate: {
    display: 'flex',
    alignItems: 'center',
    justifyContentjustifyContent: 'space-between',
    background: 'linear-gradient(60deg, #FE6B8B 40%, #FF8E53 90%)',
    border: 5,
    justifyContent: 'center',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '20px 50px',
    size: '200px',
    marginTop: '20px',
  },
  fbLogo: {
    marginTop: '30px',
    marginLeft: '1400px',
  },
  instaLogo: {
    marginLeft: '20px',
  },
  logo: {
    marginTop: '-50px',
    marginLeft: '20px',
  },
  text: {
    fontFamily: 'inherit',
    fontSize: 'medium',
    marginLeft: '30px',
  },
}))

function DownState() {
  const classes = useStyles()

  return (
    <div className={classes.header}>
      <div>
        <a href=" ">
          {' '}
          <img alt=" " className={classes.fbLogo} src={fbIcon} />
        </a>
        <a href=" ">
          <img alt=" " className={classes.instaLogo} src={instaIcon} />
        </a>
        <img alt=" " className={classes.logo} src={logo} />
      </div>
      <div className={classes.text}>
        <p>
          {' '}
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <p>
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s,
        </p>
        <p>
          {' '}
          when an unknown printer took a galley of type and scrambled it to make
          a type specimen book.
        </p>{' '}
      </div>

      <div className={classes.downDate}>
        {' '}
        ALL RIGHTS RESERVED :2021: HAND LIBRUARY
      </div>
    </div>
  )
}
export default DownState
