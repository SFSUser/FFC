import type { NextPage } from 'next'
import BasePage from '../src/tsc/page/BasePage'
import HomePage from '../src/tsc/page/HomePage'

const Home: NextPage = () => {
  return (
    <BasePage>
      <HomePage/>
    </BasePage>
  )
}

export default Home
