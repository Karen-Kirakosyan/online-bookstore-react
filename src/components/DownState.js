import { Container, makeStyles } from '@material-ui/core'
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

  instaLogo: {
    marginLeft: '15px',
  },
  logo: {
    marginTop: '-50px',
    marginLeft: '30px',
  },
  text: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '10px',
    fontFamily: 'inherit',
    fontSize: 'large',
    marginLeft: '30px',
  },
  logos: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  instaFb: {
    marginRight: '150px',
    marginTop: '15px',
  },
}))

function DownState() {
  const classes = useStyles()

  return (
    <div className={classes.header}>
      <div className={classes.logos}>
        <img alt=" " className={classes.logo} src={logo} />{' '}
        <div className={classes.instaFb}>
          <a href=" ">
            {' '}
            <img alt=" " src={fbIcon} />
          </a>
          <a href=" ">
            <img alt=" " src={instaIcon} className={classes.instaLogo} />
          </a>
        </div>
      </div>
      <div className={classes.text}>
        <li style={{ color: ' #FF8E53' }}>
          <a href="#" style={{ textDecoration: 'none', color: ' #FE6B8B' }}>
            About Us
          </a>
        </li>
        <li style={{ color: ' #FF8E53' }}>
          <a href="#" style={{ textDecoration: 'none', color: '#FE6B8B' }}>
            Contribute
          </a>
        </li>
        <li style={{ color: ' #FF8E53' }}>
          <a href="#" style={{ textDecoration: 'none', color: ' #FE6B8B' }}>
            Privacy Policy
          </a>
        </li>
      </div>

      <div className={classes.downDate}>
        {' '}
        ALL RIGHTS RESERVED | 2021 | HAND LIBRARY
      </div>
      {/* <div>
          {' '}
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </div>
        <div>
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s,
        </div>
        <div>
          {' '}
          when an unknown printer took a galley of type and scrambled it to make
          a type specimen book.
        </div>{' '}
      </div>

      <div className={classes.downDate}>
        {' '}
        ALL RIGHTS RESERVED :2021: HAND LIBRUARY
      </div> */}
    </div>
  )
}
export default DownState
