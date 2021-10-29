/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../components/images/Logo.png'
import {
  ABOUT_ROUTE,
  BOOK_ROUTE,
  HOME_ROUTE,
  NEWS_ROUTE,
} from './constantes/constants'
import './downState.css'
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
import TwitterIcon from '@material-ui/icons/Twitter'
import GitHubIcon from '@material-ui/icons/GitHub'

function DownState() {
  return (
    <div>
      <footer class="footer-distributed">
        <div class="footer-right">
          <FacebookIcon
            aria-label="Facebook.com"
            onClick={() => window.open('https://www.facebook.com')}
            fontSize="large"
            style={{ cursor: 'pointer', color: '#443131' }}
          />

          <InstagramIcon
            color="secondary"
            aria-label="Instagram.com"
            onClick={() => window.open('https://www.instagram.com')}
            fontSize="large"
            style={{ cursor: 'pointer', color: '#443131' }}
          />

          <TwitterIcon
            aria-label="Twitter.com"
            onClick={() => window.open('https://www.twitter.com')}
            fontSize="large"
            style={{ cursor: 'pointer', color: '#443131' }}
          />
          <GitHubIcon
            aria-label="Github.com"
            onClick={() => window.open('https://www.github.com')}
            fontSize="large"
            style={{ cursor: 'pointer', color: '#443131' }}
          />
        </div>
        <div class="footer-left">
          <img alt="" class="logo" src={logo} />
          <p class="footer-links">
            <Link to={HOME_ROUTE}>Home</Link>
            <Link to={BOOK_ROUTE}>Books</Link>
            <Link to={NEWS_ROUTE}>News</Link>
            <Link to={ABOUT_ROUTE}>About</Link>{' '}
          </p>

          <p style={{ alignItems: 'center' }}>Hand Library &copy; 2021</p>
        </div>
      </footer>
    </div>
  )
}
export default DownState
