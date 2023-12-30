'use client'

import X from 'components/shared/icons/X'
import { useState, ChangeEvent } from 'react'

interface Field {
  length: string
  width: string
}

const AreaCalculator = () => {
  const [fields, setFields] = useState<Field[]>([{ length: '', width: '' }])
  const [pricePerSqM, setPricePerSqM] = useState<string>('')

  const handleInputChange = (index: number, event: ChangeEvent<HTMLInputElement>) => {
    const values = [...fields]
    if (event.target.name === 'length') {
      values[index].length = event.target.value
    } else {
      values[index].width = event.target.value
    }
    setFields(values)
  }

  const handleAddFields = () => {
    setFields([...fields, { length: '', width: '' }])
  }

  const handleRemoveFields = (index: number) => {
    const values = [...fields]
    values.splice(index, 1)
    setFields(values)
  }

  const totalArea = fields.reduce(
    (total, field) => total + Number(field.length) * Number(field.width),
    0
  )
  const totalPrice = totalArea * Number(pricePerSqM)

  return (
    <div className="mx-auto flex items-center justify-center px-10 pb-24 pt-16">
      <div>
        <h1 className="mb-8 text-center text-4xl font-bold lg:text-start">Kalkulator</h1>
        {fields.map((field, index) => (
          <div
            key={`${field}-${index}`}
            className="my-12 flex flex-wrap items-center gap-2 lg:flex-nowrap lg:gap-4"
          >
            <span className="pr-4 text-center text-xs font-semibold text-primary-500">
              Pozycja: {index + 1}
            </span>
            <button
              onClick={() => handleRemoveFields(index)}
              className="text-xs text-primary-500 lg:hidden"
            >
              Usuń pozycję
            </button>
            <label className="flex w-full items-center gap-2 text-sm font-normal lg:w-auto">
              Długość (m²)
              <input
                type="number"
                name="length"
                value={field.length}
                onChange={(event) => handleInputChange(index, event)}
                className={`block rounded-md bg-gray-50 p-2 text-sm font-light shadow outline-none duration-200 focus-visible:bg-gray-100 focus-visible:ring-2 focus-visible:ring-gray-300 disabled:cursor-not-allowed disabled:opacity-70`}
              />
            </label>
            <label className="flex w-full items-center gap-2 text-sm font-normal lg:w-auto">
              Szerokość (m²)
              <input
                type="number"
                name="width"
                value={field.width}
                onChange={(event) => handleInputChange(index, event)}
                className={`block rounded-md bg-gray-50 p-2 text-sm font-light shadow outline-none duration-200 focus-visible:bg-gray-100 focus-visible:ring-2 focus-visible:ring-gray-300 disabled:cursor-not-allowed disabled:opacity-70`}
              />
            </label>
            <p className="text-sm">
              Częściowa powierzchnia:{' '}
              <span className="text-base font-semibold">
                {(Number(field.length) * Number(field.width)).toFixed(2)} m²
              </span>
            </p>
            <button
              onClick={() => handleRemoveFields(index)}
              className="hidden text-xs text-primary-500 lg:inline-block"
            >
              Usuń pozycję
            </button>
          </div>
        ))}
        <div className="flex items-center justify-between gap-4">
          <button
            onClick={() => handleAddFields()}
            className="my-4 block rounded-md bg-primary-500 px-4 py-2 text-center text-sm text-white shadow outline-none duration-200 hover:bg-primary-400 focus-visible:bg-primary-400 active:bg-primary-600"
          >
            Dodaj pozycję
          </button>
          <label className="flex items-center gap-2 text-sm font-normal">
            Cena za m²
            <input
              type="number"
              value={pricePerSqM}
              onChange={(e) => setPricePerSqM(e.target.value)}
              className={`block w-[100px] rounded-md bg-gray-50 p-2 text-sm font-light shadow outline-none duration-200 focus-visible:bg-gray-100 focus-visible:ring-2 focus-visible:ring-gray-300 disabled:cursor-not-allowed disabled:opacity-70`}
            />
          </label>
        </div>
        <div className="mt-6 space-y-2">
          <p>
            Całkowita powierzchnia:{' '}
            <span className="text-base font-semibold">{totalArea.toFixed(2)} m²</span>
          </p>
          <p>
            Całkowita cena:{' '}
            <span className="text-base font-semibold">{totalPrice.toFixed(2)}zł</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default AreaCalculator
