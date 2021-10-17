import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import { Button, TextField } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { HOME_ROUTE, ABOUT_ROUTE, CATEGORIES_ROUTE, AUTH_ROUTE } from './constantes/constants';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import SearchIcon from '@material-ui/icons/Search';
import fire from '../fire';
import { useDispatch, useSelector } from 'react-redux';
import { editSignPath, selectSignPath } from '../redux/pathSlice';
import { editHasAccount, selectHasAccount } from '../redux/hasAccountSlice';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
	root         : {
		display : 'flex'
	},
	appBar       : {
		justifyContent               : 'space-between',
		justifyContentjustifyContent : 'space-between',
		background                   : 'linear-gradient(45deg, #FE6B8B 40%, #FF8E53 90%)',
		border                       : 5,
		justifyContent               : 'center',
		boxShadow                    : '0 3px 5px 2px rgba(255, 105, 135, .3)',
		color                        : 'white',
		height                       : 50,
		padding                      : '20px 50px',
		size                         : '200px',
		transition                   : theme.transitions.create([ 'margin', 'width' ], {
			easing   : theme.transitions.easing.sharp,
			duration : theme.transitions.duration.leavingScreen
		})
	},
	appBarShift  : {
		width       : `calc(100% - ${drawerWidth}px)`,
		transition  : theme.transitions.create([ 'margin', 'width' ], {
			easing   : theme.transitions.easing.easeOut,
			duration : theme.transitions.duration.enteringScreen
		}),
		marginRight : drawerWidth
	},
	link         : {
		marginLeft  : 10,
		marginRight : 10,
		color       : 'white'
	},
	buttonsSide  : {
		display   : 'grid',
		marginTop : '750px'
	},
	title        : {
		flexGrow : 1
	},
	hide         : {
		display : 'none'
	},
	drawer       : {
		width      : drawerWidth,
		flexShrink : 0
	},
	drawerPaper  : {
		width : drawerWidth
	},
	toolBar      : {
		display        : 'flex',
		justifyContent : 'flex-end'
	},
	drawerHeader : {
		justifyContent               : 'space-between',
		display                      : 'flex',
		alignItems                   : 'center',
		justifyContentjustifyContent : 'space-between',
		background                   : 'linear-gradient(45deg, #FE6B8B 40%, #FF8E53 90%)',
		border                       : 5,
		justifyContent               : 'center',
		boxShadow                    : '0 3px 5px 2px rgba(255, 105, 135, .3)',
		color                        : 'white',
		height                       : 48,
		padding                      : '20px 50px',
		size                         : '400px'
	},
	buttonStile  : {
		display                      : 'flex',
		alignItems                   : 'center',
		justifyContentjustifyContent : 'space-between',
		background                   : 'linear-gradient(45deg, #FE6B8B 40%, #FF8E53 90%)',
		border                       : 5,
		borderRadius                 : 15,
		boxShadow                    : '0 3px 5px 2px rgba(255, 105, 135, .3)',
		color                        : 'white',
		height                       : 48,
		padding                      : '20px 50px',
		size                         : '150px',
		margin                       : theme.spacing(0, 0, 1)
	},
	content      : {
		flexGrow    : 1,
		padding     : theme.spacing(3),
		transition  : theme.transitions.create('margin', {
			easing   : theme.transitions.easing.sharp,
			duration : theme.transitions.duration.leavingScreen
		}),
		marginRight : -drawerWidth
	},
	contentShift : {
		transition  : theme.transitions.create('margin', {
			easing   : theme.transitions.easing.easeOut,
			duration : theme.transitions.duration.enteringScreen
		}),
		marginRight : 0
	}
}));

function Header() {
	const classes = useStyles();
	const theme = useTheme();
	const [ open, setOpen ] = useState(false);
	const history = useHistory();
	const path = useSelector(selectSignPath);
	const hasAccount = useSelector(selectHasAccount);
	const dispatch = useDispatch();

	const onSignout = () => {
		fire.auth().signOut();
		dispatch(editHasAccount(false));
		// history.push(AUTH_ROUTE);
	};
	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	const onSignin = () => {
		dispatch(editSignPath('signin'));
		history.push(AUTH_ROUTE);
	};

	const onSignup = () => {
		dispatch(editSignPath('signup'));
		history.push(AUTH_ROUTE);
	};

	return (
		<div className={classes.root}>
			<CssBaseline />

			<AppBar
				position='fixed'
				className={clsx(classes.appBar, {
					[classes.appBarShift]: open
				})}>
				<Toolbar className={classes.toolBar}>
					<TextField label='  Search...' />
					<SearchIcon />

					<Link className={classes.link} to={HOME_ROUTE}>
						Home
					</Link>
					<Link className={classes.link} to={ABOUT_ROUTE}>
						About
					</Link>
					<Link className={classes.link} to={CATEGORIES_ROUTE}>
						Categories
					</Link>
					{hasAccount === true && <ExitToAppOutlinedIcon onClick={onSignout}>Sign Out</ExitToAppOutlinedIcon>}
					<IconButton
						color='inherit'
						aria-label='open drawer'
						edge='end'
						onClick={handleDrawerOpen}
						className={clsx(open && classes.hide)}>
						<MenuIcon />
					</IconButton>
				</Toolbar>
			</AppBar>
			<main
				className={clsx(classes.content, {
					[classes.contentShift]: open
				})}
			/>
			<Drawer
				className={classes.drawer}
				variant='persistent'
				anchor='right'
				open={open}
				classes={{
					paper : classes.drawerPaper
				}}>
				<div className={classes.drawerHeader}>
					<IconButton onClick={handleDrawerClose}>
						{
							theme.direction === 'rtl' ? <ChevronLeftIcon /> :
							<ChevronRightIcon />}
					</IconButton>
				</div>
				<Divider />
				<div className={classes.buttonsSide}>
					{hasAccount === false && (
						<Button onClick={onSignin} variant='contained' className={classes.buttonStile}>
							Sign In
						</Button>
					)}

					{hasAccount === false && (
						<Button onClick={onSignup} variant='contained' className={classes.buttonStile}>
							Sign Up
						</Button>
					)}
				</div>
				<Divider />
			</Drawer>
		</div>
	);
}

export default Header;
