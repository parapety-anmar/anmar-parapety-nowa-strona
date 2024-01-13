'use client'

import X from 'components/shared/icons/X'
import { useState, ChangeEvent } from 'react'

interface Field {
  length: string
  width: string
  quantity: string
}

const AreaCalculator = () => {
  const [fields, setFields] = useState<Field[]>([{ length: '', width: '', quantity: '1' }])
  const [pricePerSqM, setPricePerSqM] = useState<string>('')

  const handleInputChange = (index: number, event: ChangeEvent<HTMLInputElement>) => {
    const values = [...fields]
    switch (event.target.name) {
      case 'length':
        values[index].length = event.target.value
        break
      case 'width':
        values[index].width = event.target.value
        break
      case 'quantity':
        values[index].quantity = event.target.value
        break
      default:
        console.log('?')
    }
    setFields(values)
  }

  const handleAddFields = () => {
    setFields([...fields, { length: '', width: '', quantity: '1' }])
  }

  const handleRemoveFields = (index: number) => {
    const values = [...fields]
    values.splice(index, 1)
    setFields(values)
  }

  const totalArea = fields.reduce(
    (total, field) => total + Number(field.length) * Number(field.width) * Number(field.quantity),
    0
  )
  const totalPrice = totalArea * Number(pricePerSqM)

  return (
    <div>
      {fields.map((field, index) => (
        <div
          key={`${field}-${index}`}
          className="my-10 lg:my-4"
        >
          <div className="flex flex-col items-start gap-x-4 gap-y-2 lg:flex-row lg:items-center">
            <div className="flex w-full justify-between gap-2 lg:w-auto">
              <span className="pr-4 text-center text-xs font-semibold text-primary-500">
                Pozycja {index + 1}
              </span>
              <button
                onClick={() => handleRemoveFields(index)}
                className="text-xs text-primary-500 lg:hidden"
              >
                Usuń pozycję
              </button>
            </div>
            <label className="flex w-full items-center gap-4 text-sm font-normal lg:w-auto lg:flex-col lg:items-start lg:gap-0 2xl:flex-row 2xl:items-center 2xl:gap-2">
              Długość (metry)
              <input
                type="number"
                name="length"
                value={field.length}
                onChange={(event) => handleInputChange(index, event)}
                className={`block rounded-md border border-gray-300 bg-gray-50 p-2 text-sm font-light shadow outline-none duration-200 focus-visible:bg-gray-100 focus-visible:ring-2 focus-visible:ring-gray-300 disabled:cursor-not-allowed disabled:opacity-70`}
              />
            </label>
            <label className="flex w-full items-center gap-4 text-sm font-normal lg:w-auto lg:flex-col lg:items-start lg:gap-0 2xl:flex-row 2xl:items-center 2xl:gap-2">
              Szerokość (metry)
              <input
                type="number"
                name="width"
                value={field.width}
                onChange={(event) => handleInputChange(index, event)}
                className={`block rounded-md border border-gray-300 bg-gray-50 p-2 text-sm font-light shadow outline-none duration-200 focus-visible:bg-gray-100 focus-visible:ring-2 focus-visible:ring-gray-300 disabled:cursor-not-allowed disabled:opacity-70`}
              />
            </label>
            <label className="flex w-full items-center gap-4 text-sm font-normal lg:w-auto lg:flex-col lg:items-start lg:gap-0 2xl:flex-row 2xl:items-center 2xl:gap-2">
              Ilość sztuk
              <input
                type="number"
                name="quantity"
                value={field.quantity}
                onChange={(event) => handleInputChange(index, event)}
                className={`block w-[100px] rounded-md border border-gray-300 bg-gray-50 p-2 text-sm font-light shadow outline-none duration-200 focus-visible:bg-gray-100 focus-visible:ring-2 focus-visible:ring-gray-300 disabled:cursor-not-allowed disabled:opacity-70`}
              />
            </label>
            <p className="text-sm">
              Częściowa powierzchnia:{' '}
              <span className="text-base font-semibold">
                {(Number(field.length) * Number(field.width) * Number(field.quantity)).toFixed(3)}{' '}
                m²
              </span>
            </p>
            <button
              onClick={() => handleRemoveFields(index)}
              className="hidden text-xs text-primary-500 lg:inline-block"
            >
              Usuń pozycję
            </button>
          </div>
        </div>
      ))}
      <div className="flex items-center justify-between gap-4">
        <label className="flex items-center gap-2 text-sm font-semibold ">
          Cena za m²
          <input
            type="number"
            value={pricePerSqM}
            onChange={(e) => setPricePerSqM(e.target.value)}
            className={`block w-[100px] rounded-md border border-gray-300 bg-gray-50 p-2 text-sm font-light shadow outline-none duration-200 focus-visible:bg-gray-100 focus-visible:ring-2 focus-visible:ring-gray-300 disabled:cursor-not-allowed disabled:opacity-70`}
          />
        </label>
        <button
          onClick={() => handleAddFields()}
          className="my-4 block rounded-md bg-primary-500 px-4 py-2 text-center text-sm text-white shadow outline-none duration-200 hover:bg-primary-400 focus-visible:bg-primary-400 active:bg-primary-600"
        >
          Dodaj pozycję
        </button>
      </div>
      <div className="mt-6 space-y-2">
        <p>
          Całkowita powierzchnia:{' '}
          <span className="text-base font-semibold">{totalArea.toFixed(3)} m²</span>
        </p>
        <p>
          Całkowita cena: <span className="text-base font-semibold">{totalPrice.toFixed(2)}zł</span>
        </p>
      </div>
    </div>
  )
}

export default AreaCalculator
