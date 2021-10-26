import { makeStyles } from '@material-ui/styles'
import React from 'react'
import pic from '../components/images/1.jpg'
import pic1 from '../components/images/2.jpg'
import Header from './Header'
import DownState from './DownState'
import Container from '@material-ui/core/Container'
const useStyles = makeStyles((theme) => ({
  display: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '15px',
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

          <img alt="" className={classes.pic1} src={pic1} />
        </div>
      </Container>
      <DownState />
    </>
  )
}
export default Home
