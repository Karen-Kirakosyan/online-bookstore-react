import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './Auth.css';
import { useHistory } from 'react-router';
import { SIGN_UP_ROUTE } from '../constantes/constants';
const useStyles = makeStyles((theme) => ({
	root   : {
		'& > *' : {
			margin : theme.spacing(1),
			width  : '25ch'
		}
	},
	button : {
		'& > *' : {
			margin : theme.spacing(1)
		}
	}
}));

export default function Auth(props) {
	const {
		email,
		setEmail,
		password,
		setPassword,
		handleLogin,
		handleSignup,
		hasAccount,
		setHasAccount,
		emailError,
		passwordError
	} = props;

	const classes = useStyles();
  const history = useHistory()
	const onEmailType = (e) => {
		setEmail(e.target.value);
	};
	const onPasswordType = (e) => {
		setPassword(e.target.value);
	};


	// 	return (
	// 		<div>
	// 			<form className={classes.root} noValidate autoComplete='off'>
	// 				<TextField id='standard-basic' label='E-mail' onChange={onEmailType} />
	// 				<p>{emailError}</p>
	// 				<TextField
	// 					id='standard-basic'
	// 					label='Password'
	// 					onChange={onPasswordType}
	// 					required
	// 					value={password}
	// 					type='password'
	// 				/>
	// 				<p>{passwordError}</p>
	// 			</form>
	// 			<div>
	//       {hasAccount ? (
	//           <>
	//           <Button variant='contained' color='primary' onClick={handleLogin} >Sign In</Button>
	//           <p>Don't have an account?<p onClick={() => setHasAccount(!hasAccount)}>Sign Up</p></p>

	//           </>
	//       ) : (
	//         <>
	//         <Button variant='contained' color='primary' onClick={handleSignup}>Sign Up</Button>
	//         <p>Have an account?<p onClick={() => setHasAccount(!hasAccount)}>Sign In</p></p>
	//         </>
	//       )}
	//       </div>
	// 		</div>
	// 	);
	// }

	return (
    <>
    <div class='bold-line'></div>
    <div class='container'>
      <div class='window'>
        <div class='overlay'></div>
        <div class='content'>
          <div class='welcome'>Hello There!</div>
          <div class='subtitle'>We're almost done. Before using our services you need to Sign in.</div>
          <div class='input-fields'>
            <input type='email' placeholder='Email' class='input-line full-width' onChange={onEmailType}></input>
            <span>{emailError}</span>
            <input type='password' placeholder='Password' class='input-line full-width' onChange={onPasswordType}></input>
            <span>{passwordError}</span>
          </div>
          <div class='spacing' onClick={() => history.push(SIGN_UP_ROUTE)}>Don't have an account?<span class='highlight'>Sign Up</span></div>
          <div onClick={handleLogin}><button class='ghost-round full-width'>Sign In</button></div>
        </div>
      </div>
    </div>
    </>
	);
}
