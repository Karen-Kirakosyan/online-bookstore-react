// import './App.css'
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
// import About from './components/About'
// import Categories from './components/Categories'
// import {
//   HOME_ROUTE,
//   ABOUT_ROUTE,
//   CATEGORIES_ROUTE,
//   SIGN_IN_ROUTE,
//   SIGN_UP_ROUTE,
//   BOOK_ROUTE,
// } from './components/constantes/constants'
// import Main from './components/Main'
// import Auth from './components/Auth'
// import Header from './components/Header'

// function App() {
//   return (
//     <Switch>
//       <Route exact path={HOME_ROUTE}>
//         <Main />
//       </Route>
//       <Route path={ABOUT_ROUTE}>
//         <Main />
//       </Route>
//       <Route path={BOOK_ROUTE}>
//         <Main />
//       </Route>
//       <Route path={CATEGORIES_ROUTE}>
//         <Main />
//       </Route>
//       <Route path={SIGN_IN_ROUTE}>
//         <Auth />
//       </Route>
//       <Route path={SIGN_UP_ROUTE}>
//         <Auth />
//       </Route>
//     </Switch>
//   )
// }

// export default App
/* eslint-disable*/
import './App.css';
import { BrowserRouter as Switch, Route, useHistory } from 'react-router-dom';
import {
	HOME_ROUTE,
	ABOUT_ROUTE,
	CATEGORIES_ROUTE,
	AUTH_ROUTE,
	BOOK_ROUTE,
	SIGN_IN_ROUTE,
	SIGN_UP_ROUTE
} from './components/constantes/constants';
import Main from './components/Main';
import fire from './fire';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { editHasAccount } from './redux/hasAccountSlice';
import Book from './components/Book';
import Auth from './components/Auth/Auth';

function App() {
	return (
		<Switch>
			<Route exact path={HOME_ROUTE}>
				<Main />
			</Route>
			<Route path={ABOUT_ROUTE}>
				<Main />
			</Route>
			<Route path={BOOK_ROUTE}>
				<Book />
			</Route>
			<Route path={CATEGORIES_ROUTE}>
				<Main />
			</Route>
			<Route path={AUTH_ROUTE}>
				<Auth />
			</Route>
			<Route exact path={SIGN_IN_ROUTE}>
				<Auth />
			</Route>
			<Route path={SIGN_UP_ROUTE}>
				<Auth />
			</Route>
		</Switch>
	);
}

export default App;
