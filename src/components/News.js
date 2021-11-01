/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react'

import TextField from '@material-ui/core/TextField'

import Container from '@material-ui/core/Container'
import './News.css'
import SearchIcon from '@material-ui/icons/Search'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import newsLogo from '../components/images/newslogo.png'
import { Link } from 'react-router-dom'
import { HOME_ROUTE } from './constantes/constants'
import FooterNews from './newsFooter'

function News() {
  const [articles, setArticles] = useState([])
  const [term, setTerm] = useState('all')
  const [searchValue, setSearchValue] = useState('')
  const [loading, setloading] = useState(true)
  const matches = useMediaQuery('(min-width: 1072px)')

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await fetch(
          `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${term}&api-key=Eo9DgGPykvV9HUjuYefUOnwlaT7FI9kT`,
        )
        const articles = await res.json()
        setArticles(articles.response.docs)
        setloading(false)
      } catch (error) {}
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
      <div class="header">
        {matches ? (
          <img style={{ marginTop: '20px' }} alt="" src={newsLogo} />
        ) : (
          <></>
        )}
        <nav class="nav">
          <Link class="nav__link" to={HOME_ROUTE}>
            Home
          </Link>
          <a class="nav__link" href="#" onClick={() => setTerm('Latest')}>
            Latest
          </a>
          <a class="nav__link" href="#" onClick={() => setTerm('Politics')}>
            Politics
          </a>
          <a class="nav__link" href="#" onClick={() => setTerm('Culture')}>
            Culture
          </a>
        </nav>
        <div style={{ display: 'flex', alignItems: 'self-end' }}>
          <TextField
            label=""
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
      </div>

      <Container maxWidth="70%" style={{ paddingTop: '150px' }}>
        {loader()}

        <span class="articleHeader">
          YOU ARE CURRENTLY VIEWING NEWS ABOUT{' '}
          <span
            style={{
              marginLeft: '10px',
              color: '#f54480',
              fontSize: 'inherit',
            }}
          >
            {term}
          </span>
        </span>

        <section class="section">
          {articles.map((article) => {
            const {
              abstract,
              headline: { main },
              byline: { original },
              lead_paragraph,

              section_name,
              web_url,
              _id,
            } = article
            return (
              <article className="articule" key={_id}>
                <h2
                  style={{
                    fontWeight: '600',
                    fontSize: 'xx-large ',
                    fontFamily: 'fangsong',
                    color: '#rgb(12 126 230)',
                  }}
                >
                  {main}
                </h2>
                <div>
                  <p
                    style={{
                      fontFamily: 'inherit',
                      color: 'te#0c64b5al',
                      fontSize: 'large',
                      fontWeight: 'bolder',
                    }}
                  >
                    {abstract}
                  </p>

                  <p
                    style={{
                      fontFamily: '-webkit-body',
                      color: '#32526e',
                      fontSize: 'medium',
                      fontWeight: '600',
                    }}
                  >
                    {lead_paragraph}
                  </p>
                </div>
                <p>
                  <span
                    onClick={() => setTerm(original)}
                    style={{
                      fontFamily: 'serif',
                      fontSize: 'x-large',
                      cursor: 'pointer',

                      borderBottom: 'double',
                    }}
                  >
                    {original}
                  </span>
                </p>
                <span
                  onClick={() => setTerm(section_name)}
                  style={{
                    fontFamily: 'sans-serif',
                    fontSize: 'large',
                    cursor: 'pointer',

                    borderBottom: 'double',
                  }}
                >
                  Category: {section_name}
                </span>
                <p>
                  <a
                    alt=" "
                    href={web_url}
                    target="_blank"
                    style={{
                      fontFamily: 'serif',
                      fontSize: 'larger',
                      cursor: 'pointer',
                      color: '#f54480',

                      // borderBottom: 'double',
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
      <FooterNews />
    </>
  )
}

export default News
