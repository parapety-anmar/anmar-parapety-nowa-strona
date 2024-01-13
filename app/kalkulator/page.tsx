import AreaCalculator from 'components/Calculator/Calculator'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AN-MAR Parapety | Kalkulator',
  description:
    'Zapraszamy do odkrycia bogatej oferty parapetów AN-MAR - wiodącego producenta i sprzedawcy parapetów zewnętrznych, parapetów wewnętrznych oraz okien.',
}

const CalculatorPage = () => {
  return (
    <div className="mx-auto px-10 pb-24 pt-16">
      <h1 className="mb-8 text-center text-4xl font-bold lg:text-start">Kalkulator</h1>
      <div className="mb-8 space-y-1 text-sm">
        <p>Ceny hurtowe wg. cennika AN-MAR 1/2024 </p>
        <p>Ceny detaliczne wg. cennika detal 1/2024 </p>
      </div>
      <AreaCalculator />
    </div>
  )
}

export default CalculatorPage
