import { makeStyles } from '@material-ui/styles'
import React from 'react'
import pic from '../components/images/Background-1.png'
import pic1 from '../components/images/book-pic.jpg'
import pic2 from '../components/images/text.png'
import DownState from './DownState'
const useStyles = makeStyles((theme) => ({
  img: {
    marginTop: '10px',
    width: '1663px',
    height: '760px',
  },
  pic1: {
    width: '800px',
    marginTop: '35px',
  },
  imgs: {
    display: 'flex',
  },
  pic2: {
    width: '820px',
  },
}))

function Home() {
  const classes = useStyles()
  return (
    <>
      <div>
        <img alt="" className={classes.img} src={pic} />
        <div className={classes.imgs}>
          <img alt="" className={classes.pic1} src={pic1} />
          <img alt="" className={classes.pic2} src={pic2} />
        </div>
        <DownState />
      </div>
    </>
  )
}
export default Home
