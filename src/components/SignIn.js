import React from 'react'

import './Auth.css'
import { useHistory } from 'react-router'
import { SIGN_UP_ROUTE } from '../constantes/constants'

export default function Auth(props) {
  const {
    setEmail,
    setPassword,
    handleLogin,

    emailError,
    passwordError,
  } = props

  const history = useHistory()
  const onEmailType = (e) => {
    setEmail(e.target.value)
  }
  const onPasswordType = (e) => {
    setPassword(e.target.value)
  }

  return (
    <>
      <div>
        <div class="bold-line"></div>
        <div class="container">
          <div class="window">
            <div class="overlay"></div>
            <div class="content">
              <div class="welcome">Hello There!</div>
              <div class="subtitle">
                We're almost done. Before using our services you need to Sign
                in.
              </div>
              <div class="input-fields">
                <input
                  type="email"
                  placeholder="Email"
                  class="input-line full-width"
                  onChange={onEmailType}
                ></input>
                <span>{emailError}</span>
                <input
                  type="password"
                  placeholder="Password"
                  class="input-line full-width"
                  onChange={onPasswordType}
                ></input>
                <span>{passwordError}</span>
              </div>
              <div class="spacing" onClick={() => history.push(SIGN_UP_ROUTE)}>
                Don't have an account?<span class="highlight">Sign Up</span>
              </div>
              <div onClick={handleLogin}>
                <button class="ghost-round full-width">Sign In</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
