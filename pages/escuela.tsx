import type { NextPage } from 'next'
import BasePage from '../src/tsc/page/BasePage'
import EscuelaPage from '../src/tsc/page/EscuelaPage'

const Home: NextPage = () => {
  return (
    <BasePage>
      <EscuelaPage/>
    </BasePage>
  )
}

export default Home
