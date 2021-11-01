import { makeStyles } from '@material-ui/styles'
import React from 'react'
import pic from '../components/images/1.jpg'
import pic1 from '../components/images/book-pic.jpg'

import Header from './Header'
import DownState from './DownState'
import Container from '@material-ui/core/Container'
const useStyles = makeStyles((theme) => ({
  display: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '15px',
  },
  pic1: {
    width: '700px',

    height: '500px',
    '@media (max-width: 1000px)': {
      width: '450px',

      height: '250px',
    },
  },
  imgText: {
    display: 'flex',
    marginTop: '20px',
    marginBottom: '20px',
    '@media (max-width: 1000px)': {
      display: 'flex',
      flexDirection: 'column',
    },
  },
  text: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginLeft: '20px',
  },
  h1: {
    fontSize: '-webkit-xxx-large',
    color: ' #fe6b8b',
    fontFamily: 'ui-serif',
  },
  h3: {
    fontSize: 'xx-large',
    color: '#7c7c6a',
    fontFamily: 'ui-serif',
  },
  p: {
    fontSize: 'x-large',
    fontFamily: 'ui-serif',
    color: '#7c7c6a',
  },
}))

function Home() {
  const classes = useStyles()
  return (
    <>
      <Header />
      <Container maxWidth="80%">
        <div className={classes.display}>
          <img alt="" className={classes.img} src={pic} />
          <div className={classes.imgText}>
            <img alt="" className={classes.pic1} src={pic1} />
            <p className={classes.text}>
              <h1 className={classes.h1}>ONE HANDED BOOK</h1>
              <h3 className={classes.h3}>
                FIND YOUR FAVORITE BOOKS IN OUR STORE
              </h3>
              <p className={classes.p}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </p>
          </div>
        </div>
      </Container>
      <DownState />
    </>
  )
}
export default Home
