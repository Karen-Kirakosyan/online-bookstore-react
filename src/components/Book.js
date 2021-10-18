// import React from 'react'
// import { makeStyles } from '@material-ui/core/styles'
// import clsx from 'clsx'
// import Card from '@material-ui/core/Card'
// import CardHeader from '@material-ui/core/CardHeader'
// import CardMedia from '@material-ui/core/CardMedia'
// import CardContent from '@material-ui/core/CardContent'
// import CardActions from '@material-ui/core/CardActions'
// import Collapse from '@material-ui/core/Collapse'
// import Avatar from '@material-ui/core/Avatar'
// import IconButton from '@material-ui/core/IconButton'
// import Typography from '@material-ui/core/Typography'
// import { red } from '@material-ui/core/colors'
// import FavoriteIcon from '@material-ui/icons/Favorite'
// import ShareIcon from '@material-ui/icons/Share'
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
// import MoreVertIcon from '@material-ui/icons/MoreVert'

// const useStyles = makeStyles((theme) => ({
//   root: {
//     maxWidth: 345,
//   },
//   media: {
//     height: 0,
//     paddingTop: '56.25%', // 16:9
//   },
//   expand: {
//     transform: 'rotate(0deg)',
//     marginLeft: 'auto',
//     transition: theme.transitions.create('transform', {
//       duration: theme.transitions.duration.shortest,
//     }),
//   },
//   expandOpen: {
//     transform: 'rotate(180deg)',
//   },
//   avatar: {
//     backgroundColor: red[500],
//   },
// }))

// function Book() {
//   const classes = useStyles()
//   const [expanded, setExpanded] = React.useState(false)

//   const handleExpandClick = () => {
//     setExpanded(!expanded)
//   }

//   return (
//     <Card className={classes.root}>
//       <CardHeader
//         avatar={
//           <Avatar aria-label="recipe" className={classes.avatar}>
//             R
//           </Avatar>
//         }
//         action={
//           <IconButton aria-label="settings">
//             <MoreVertIcon />
//           </IconButton>
//         }
//         title="Shrimp and Chorizo Paella"
//         subheader="September 14, 2016"
//       />
//       <CardMedia
//         className={classes.media}
//         image="/static/images/cards/paella.jpg"
//         title="Paella dish"
//       />
//       <CardContent></CardContent>
//       <CardActions disableSpacing>
//         <IconButton aria-label="add to favorites">
//           <FavoriteIcon />
//         </IconButton>
//         <IconButton aria-label="share">
//           <ShareIcon />
//         </IconButton>
//         <IconButton
//           className={clsx(classes.expand, {
//             [classes.expandOpen]: expanded,
//           })}
//           onClick={handleExpandClick}
//           aria-expanded={expanded}
//           aria-label="show more"
//         >
//           <ExpandMoreIcon />
//         </IconButton>
//       </CardActions>
//       <Collapse in={expanded} timeout="auto" unmountOnExit>
//         <CardContent>
//           <Typography paragraph>Method:</Typography>
//         </CardContent>
//       </Collapse>
//     </Card>
//   )
// }
// export default Book

import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react'


const Books = () => {
	const [ books, setBooks ] = useState([]);


	useEffect(() => {
		const fetchBooks = async () => {
			const res = await axios.get(
				'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=Eo9DgGPykvV9HUjuYefUOnwlaT7FI9kT'
			);
			setBooks(res.data.results.books)
		};
		
		fetchBooks();
	}, []);

	return (
		<> 
			<h1 className="font-bold text-center text-4xl py-10">Books NYT</h1>
			<section className="grid grid-cols-1 gap-10 px-5">
				{books.map((book) => {
					const {age_group, author, book_image, buy_links, description,  primary_isbn, publisher, rank, title} = book
              return (
                  <h1>Books</h1>
              )
				})}
			</section>
		</>
	);
};

export default Books;
