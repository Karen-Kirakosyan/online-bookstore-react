import { makeStyles } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: '#e1e0e0;',
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
}))

function DownState() {
  const classes = useStyles()
  return (
    <div className={classes.header}>
      <h1 className={classes.h1}>HEND LIBRUARY</h1>
      <div className={classes.info}>
        <p> Information:</p>
        <p> Tel: +3740000000 </p>
        <p> Adress: Armenia,Yerevan </p>
        <p> Email:exemple@gmail.com</p>
      </div>
    </div>
  )
}
export default DownState
