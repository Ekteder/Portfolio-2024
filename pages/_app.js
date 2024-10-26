import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Shah Md Ekteder</title>
        <meta name="description" content="Official website of Shah Md Ekteder" />
        <meta property="og:title" content="Shah Md Ekteder" />
        <meta property="og:description" content="Official website of Shah Md Ekteder" />
        <meta property="og:type" content="website" />
        <meta name="google-site-verification" content="gP5gGQwXgain37Oh_AZhWox-igJHBD55-3MvNjlAS9s" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
