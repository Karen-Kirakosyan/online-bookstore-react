/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react'
import DownState from './DownState'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import './News.css'
import { TramOutlined } from '@material-ui/icons'
import SearchIcon from '@material-ui/icons/Search'

function News() {
  const [articles, setArticles] = useState([])
  const [term, setTerm] = useState('all')
  const [isLoading, setIsLoading] = useState([true])
  const [searchValue, setSearchValue] = useState('')
  const [loading, setloading] = useState(true)

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await fetch(
          `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${term}&api-key=Eo9DgGPykvV9HUjuYefUOnwlaT7FI9kT`,
        )
        const articles = await res.json()
        console.log(articles)
        setArticles(articles.response.docs)
        setloading(false)
      } catch (error) {
        console.log(error)
      }
    }
    fetchArticles()
  }, [term])

  const loader = () => {
    if (loading) {
      return (
        <div
          class="main-site"
          style={{
            textAlign: 'center',
            justifyContent: ' center',
            alignItems: 'center',
            marginTop: '200px',
          }}
        >
          <div class="main-header pad-top wrapper" id="mainHeader"></div>

          <div
            class="main-content space-top wrapper"
            role="main"
            id="mainContent"
          >
            <div class="loader loader-2"></div>
            <div class="loader loader-2"></div>
            <div class="loader loader-2"></div>
          </div>
        </div>
      )
    }
  }

  const onSearch = () => {
    if (searchValue.length > 0) {
      setTerm(searchValue)
    } else {
      setTerm('latest')
    }
    setloading(true)
  }

  return (
    <>
      {loader()}
      <div class="header">
        <div class="headerContainer">
          <div class="header__inner">
            <div style={{ display: 'flex', alignItems: 'self-end' }}>
              <TextField
                label="eg. technology "
                onChange={(e) => setSearchValue(e.target.value)}
              />
              <SearchIcon
                fontSize="medium"
                onClick={onSearch}
                style={{ paddingLeft: '5px', cursor: 'pointer' }}
              >
                Search
              </SearchIcon>
            </div>
            <nav class="nav">
              <a class="nav__link" href="#" onClick={() => setTerm('Latest')}>
                Latest
              </a>
              <a class="nav__link" href="#" onClick={() => setTerm('Politics')}>
                Politics{' '}
              </a>
              <a class="nav__link" href="#" onClick={() => setTerm('Economy')}>
                Economy
              </a>
              <a class="nav__link" href="#" onClick={() => setTerm('Future')}>
                Future
              </a>
              <a class="nav__link" href="#" onClick={() => setTerm('Culture')}>
                Culture
              </a>
            </nav>
          </div>
        </div>
      </div>
      <Container maxWidth="70%" style={{ paddingTop: '150px' }}>
        <h2
          style={{ display: 'flex', justifyContent: 'center', fontWeight: 500 }}
        >
          You are currently viewing news about {term}
        </h2>
        <section>
          {articles.map((article) => {
            const {
              abstract,
              headline: { main },
              byline: { original },
              lead_paragraph,
              news_desk,
              section_name,
              web_url,
              _id,
              word_count,
            } = article
            return (
              <article key={_id}>
                <h2 style={{ background: '#6c7279', fontWeight: '400' }}>
                  {main}
                </h2>
                <div style={{ backgroundColor: 'darkgray' }}>
                  <p>{abstract}</p>
                  <p>{lead_paragraph}</p>
                </div>
                <p>
                  <span
                    onClick={() => setTerm(original)}
                    style={{ cursor: 'pointer', borderBottom: '2px solid' }}
                  >
                    {original}
                  </span>
                </p>
                <span
                  onClick={() => setTerm(section_name)}
                  style={{ cursor: 'pointer', borderBottom: '2px solid' }}
                >
                  Category: {section_name}
                </span>
                <p>
                  <a
                    alt=" "
                    href={web_url}
                    target="_blank"
                    style={{
                      textDecoration: 'none',
                      color: 'inherit',
                      borderBottom: '2px solid',
                    }}
                  >
                    Source
                  </a>
                </p>
              </article>
            )
          })}
        </section>
      </Container>
    </>
  )
}

export default News
