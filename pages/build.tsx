import type { NextPage } from 'next'
import BasePage from '../src/tsc/page/BasePage'
import BuildPage from '../src/tsc/page/BuildPage'

const Home: NextPage = () => {
  return (
    <BasePage>
      <BuildPage/>
    </BasePage>
  )
}

export default Home
