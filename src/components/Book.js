import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Header from './Header'
import DownState from './DownState'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import SearchIcon from '@material-ui/icons/Search'
import { Button, TextField } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import './Books.css'
import GetAppTwoToneIcon from '@material-ui/icons/GetAppTwoTone'
import Serlector from './Selector'
import { useSelector } from 'react-redux'
import { SIGN_IN_ROUTE } from './constantes/constants'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { selectHasAccount } from '../redux/hasAccountSlice'
const useStyles = makeStyles((theme) => ({
  search: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginRight: '250px',
    marginTop: '60px',
  },
  textField: {
    marginLeft: 'auto',
  },
}))

function Book() {
  const [books, setBooks] = useState([])
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const [filteredBooks, setFilteredBooks] = useState([])
  const classes = useStyles()
  const hasAccount = useSelector(selectHasAccount)
  const history = useHistory()
  useEffect(() => {
    const fetchBooks = async () => {
      const res = await axios.get(
        'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=Eo9DgGPykvV9HUjuYefUOnwlaT7FI9kT',
      )
      setBooks(res.data.results.books)
    }

    fetchBooks()
  }, [])

  useEffect(() => {
    setFilteredBooks(books.filter((book) => book.title.includes(searchValue)))
  }, [searchValue, books])

  const onSerchChange = (e) => {
    setSearchValue(e.target.value.toUpperCase())
  }

  const onSearch = () => {
    if (!searchOpen) {
      setSearchOpen(true)
      return
    }
    setSearchOpen(false)
  }
  const onDownload = () => {
    if (!hasAccount) {
      history.push(SIGN_IN_ROUTE)
      return
    }
  }

  return (
    <>
      <Header />

      <div className={classes.search}>
        {' '}
        {searchOpen === true && (
          <TextField
            className={classes.textField}
            label="  Search..."
            onChange={onSerchChange}
          />
        )}
        <Button>
          {' '}
          <SearchIcon onClick={onSearch} />{' '}
        </Button>
      </div>
      <Container maxWidth="80%" style={{ textAlign: 'center' }}>
        <h1>Bestsellers of this week</h1>
        <h2>According to NYT</h2>
        {filteredBooks.map((book) => {
          const {
            author,
            book_image,
            buy_links,
            description,
            publisher,
            title,
          } = book
          console.log(book)
          return (
            <>
              <div
                style={{
                  display: 'inline-grid',
                  margin: '15px',
                  justifyContent: 'space-between',
                  width: '25%',
                }}
              >
                <div class="card">
                  <div class="content">
                    <div class="front">
                      <img alt="" src={book_image} />
                    </div>
                    <div
                      class="back"
                      style={{
                        boxSizing: 'initial',
                        background: 'linear-gradient(#fe6b8b, #ff8e53)',
                        color: '#000',
                      }}
                    >
                      <p>{title}</p>
                      <p style={{ fontSize: '18px', fontWeight: 'bold' }}>
                        Author: {author}
                      </p>
                      <p style={{ fontSize: '16px' }}>Publisher: {publisher}</p>
                      <h4>Description</h4>
                      <p style={{ fontSize: '16px', lineHeight: '30px' }}>
                        {description}
                      </p>
                      <div>
                        <Button onClick={onDownload}>
                          {' '}
                          Download
                          {hasAccount && (
                            <a href={buy_links[0].url} target="_blank">
                              <div>
                                {' '}
                                <GetAppTwoToneIcon> </GetAppTwoToneIcon>
                              </div>
                            </a>
                          )}
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )
        })}
      </Container>
      <DownState />
    </>
  )
}

export default Book
