import type { NextPage } from 'next'
import BasePage from '../src/tsc/page/BasePage'
import ActualidadPage from '../src/tsc/page/ActualidadPage'

const Home: NextPage = () => {
  return (
    <BasePage>
      <ActualidadPage/>
    </BasePage>
  )
}

export default Home
