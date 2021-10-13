import { makeStyles } from '@material-ui/styles'
import React from 'react'
import DownState from './DownState'

const useStyles = makeStyles((theme) => ({
  header: {
    fontWeight: 'bold',
    color: 'unset',
    display: 'flex',
    justifyContent: 'center',
    fontSize: '-webkit-xxx-large',
    backgroundColor: 'seashell',
    paddingTop: '20px',
    fontFamily: 'cursive',
  },
  pic1: {
    borderRadius: '60px',
    marginLeft: '80px',
    backgroundColor: 'white',
    boxShadow: '0 4px 8px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%)',
    width: '600px',
    height: '400px',
  },
  pic2: {
    borderRadius: '60px',
    marginLeft: '1000px',

    backgroundColor: 'white',
    boxShadow: '0 4px 8px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%)',
    width: '600px',
    height: '400px',
  },
  text: {
    display: 'flex',
    textAlign: 'center',
    flexWrap: 'wrap',
    flexDirection: 'column',
    alignItems: 'center',
    marginRight: '10px',
    webkitTextStroke: 'thin',
    color: '#b1193b',
    fontSize: 'x-large',
  },
  style: {
    display: 'flex',
    alignItems: 'center',
  },
}))

function About() {
  const classes = useStyles()
  return (
    <>
      <div className={classes.header}>About Us </div>
      <div>
        <p className={classes.style}>
          {' '}
          <img
            className={classes.pic1}
            src="https://www.caloundragardens.com.au/wp-content/uploads/2015/08/caloundra-libruary-sunshine-coast.jpg"
          />
          <p className={classes.text}>
            <h1>Give life to reading</h1>
            Life to reading The cartoon is just not vengeful. Let's start with
            the results of the weekend, now for the sake of save life. A lot of
            pain is very important. Sit amet consectetur adipiscing elit duis
            tristique sollicitudin nibh. Diam macenas ultricies mi eget. . Who
            is the author of the elite How the lake hung up the throat and
            sometimes put down the Internet. The earth is annoying now, it is
            not an attraction for the mass nor the public. It's in the middle of
            the ball before it's in place to start.
          </p>
        </p>
      </div>
      <div>
        <p>
          {' '}
          <p className={classes.text}>
            <h1>Seed of knowledge</h1>
            Feugiat nibh sed pulvinar proin gravida hendrerit lectus. The
            torturer lay down the temperature, and the consequences are always
            monitored. Pellentesque habitant morbi tristique senectus et netus
            et malesuada. okay to be honest. The pain itself is a lot of pain,
            the main reason is the pain, but I give it time to fall into it with
            some great pain and pain. And not for any scenario. Cras sed felis
            eget velit aliquet lacus est non est.
          </p>
          <img
            className={classes.pic2}
            src="https://m.media-amazon.com/images/I/61IW+00iCrL._AC_SL1001_.jpg"
          />
        </p>
        <div>
          <p className={classes.style}>
            <img
              className={classes.pic1}
              src="https://t4.ftcdn.net/jpg/02/66/42/45/360_F_266424527_LFk3kmKVs6LpTDpU9edwkAK8J9UlVnrh.jpg"
            />
            <p className={classes.text}>
              <h1>Best for bookworms</h1>
              But that's always a laugh in the bureau's pregnant makeup of
              everyone. Malesuada nunc vel risus commodo viverra maecenas. At
              the bed of the valley No need to drink, because everyone is
              scared. Please contact us The course of life is aeneas. Laoreet
              will not be cured during pregnancy and the bow will not be cured.
              The pain of the venenate bed is great and the pain of the ferry is
              ok. The hairstyle, therefore, is not a warm lion or the average
              person's door is not cushioned.
            </p>
          </p>
        </div>
      </div>
      <DownState />
    </>
  )
}
export default About
