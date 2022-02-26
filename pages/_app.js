import '../styles/globals.css'
import CustomTheme from '../styles/theme'
import Layout from '../components/layout/layout'

function MyApp({ Component, pageProps }) {
  return (
    <CustomTheme>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CustomTheme>
  )
}

export default MyApp
