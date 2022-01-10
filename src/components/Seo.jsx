import React from 'react'
import { Helmet } from 'react-helmet'
import { useLocation } from 'react-router-dom'

const Seo = ({
  title = 'Home',
  description = 'Tales from the trap (TFTT) is an UK film produced by Terry Stone. It tells the story of Slick, a rising star in the UK Rap & Drill Music scenes as part of the SE8 crew who are tearing up the music scene. Soon the SE8’s friendship is tested to the limit. TFTT is a story of brotherhood, loyalty and a friendship that runs deeper than any family.',
  ...props
}) => {
  const { pathname } = useLocation()
  const url = process.env.APP_URL

  const seo = {
    title,
    description,
    titleTemplate: '%s | TFTT',
    image: `${url}logo192.png`,
    url: `${url}${pathname}`
  }

  return (
    <Helmet title={seo.title} titleTemplate={seo.titleTemplate}>
      <meta name='description' content={seo.description} />
      <meta name='image' content={seo.image} />
      <link rel='canonical' href={url} />
      <meta name='keywords' content={props.keywords || 'Terry Stone, UK film, Slick, brotherhood, TFTT, SE8 crew'} />

      {seo.title && <meta property='og:title' content={seo.title} />}
      {seo.description && <meta property='og:description' content={seo.description} />}
      <meta property='og:site_name' content='Tales From The Trap' />
      {seo.url && <meta property='og:url' content={seo.url} />}
      {seo.image && <meta property='og:image' content={seo.image} />}

      {seo.title && <meta name='twitter:title' content={seo.title} />}
      {seo.description && <meta name='twitter:description' content={seo.description} />}
      {seo.image && <meta name='twitter:image' content={seo.image} />}
      {seo.url && <meta property='twitter:url' content={seo.url} />}
      <meta name='twitter:card' content='summary_large_image' />
    </Helmet>
  )
}

export default Seo
