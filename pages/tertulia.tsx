import type { NextPage } from 'next'
import BasePage from '../src/tsc/page/BasePage'
import TertuliaPage from '../src/tsc/page/TertuliaPage'

const Home: NextPage = () => {
  return (
    <BasePage>
      <TertuliaPage/>
    </BasePage>
  )
}

export default Home
