import '../styles/globals.css'
import styles from '../src/scss/index.scss';
import type { AppProps } from 'next/app'

console.log(styles);
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
