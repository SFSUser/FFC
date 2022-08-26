import type { NextPage } from 'next'
import BasePage from '../src/tsc/page/BasePage'
import MigrantesPage from '../src/tsc/page/MigrantesPage'

const Home: NextPage = () => {
  return (
    <BasePage>
      <MigrantesPage/>
    </BasePage>
  )
}

export default Home
