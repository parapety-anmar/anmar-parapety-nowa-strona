import AreaCalculator from 'components/Calculator/Calculator'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AN-MAR Parapety | Kalkulator',
  description:
    'Zapraszamy do odkrycia bogatej oferty parapetów AN-MAR - wiodącego producenta i sprzedawcy parapetów zewnętrznych, parapetów wewnętrznych oraz okien.',
}

const CalculatorPage = () => {
  return <AreaCalculator />
}

export default CalculatorPage
