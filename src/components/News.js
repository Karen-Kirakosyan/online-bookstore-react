/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react'
import TextField from '@material-ui/core/TextField'
import Container from '@material-ui/core/Container'
import './News.css'
import SearchIcon from '@material-ui/icons/Search'
import newsLogo from '../components/images/newslogo.png'
import { Link } from 'react-router-dom'
import { HOME_ROUTE } from './constantes/constants'
import FooterNews from './newsFooter'

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
      <div class="header">
        <img style={{ marginTop: '20px' }} alt="" src={newsLogo} />
        <nav class="nav">
          <Link class="nav__link" to={HOME_ROUTE}>
            Home
          </Link>
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

        <span
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            alignItems: 'center',
            color: '#8c8e96',
            fontSize: 'xxx-large',
            fontFamily: 'ui-monospace',
          }}
        >
          YOU ARE CURRENTLY VIEWING NEWS ABOUT{' '}
          <span
            style={{
              marginLeft: '10px',
              color: '#f54480',
              fontSize: 'xxx-large',
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
              news_desk,
              section_name,
              web_url,
              _id,
              word_count,
            } = article
            return (
              <article className="articule" key={_id}>
                <h2
                  style={{
                    fontWeight: '600',
                    fontSize: 'xx-large ',
                    fontFamily: 'ui-monospace',
                    color: '#rgb(12 126 230)',
                  }}
                >
                  {main}
                </h2>
                <div>
                  <p
                    style={{
                      fontFamily: 'ui-monospace',
                      color: 'te#0c64b5al',
                      fontSize: 'large',
                      fontWeight: 'bolder',
                    }}
                  >
                    {abstract}
                  </p>

                  <p
                    style={{
                      fontFamily: 'ui-monospace',
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
                      fontFamily: 'ui-monospace',
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
                    fontFamily: 'ui-monospace',
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
