'use client';

import { Onedoc } from '@onedoc/client';
import { Tailwind, compile } from '@onedoc/react-print';
import ArrowRight from 'components/shared/icons/ArrowRight';
import Logo from 'components/shared/logo/Logo';
import { ChangeEvent, useState } from 'react';

interface Field {
  name: string;
  length: string;
  width: string;
  quantity: string;
  pricePerSqM: string;
}

const AreaCalculator = () => {
  const [pricingName, setPricingName] = useState<string>('');
  const [fields, setFields] = useState<Field[]>([
    {
      name: `Pozycja 1`,
      length: '',
      width: '',
      quantity: '1',
      pricePerSqM: '',
    },
  ]);
  const [pdfGeneration, setPdfGeneration] = useState(false);
  const [pdfGenerationError, setPdfGenerationError] = useState<string>('');
  const [pdfGenerationLink, setPdfGenerationLink] = useState<string>('');

  const handleInputChange = (
    index: number,
    event: ChangeEvent<HTMLInputElement>,
    fieldName: keyof Field,
  ) => {
    const values = [...fields];
    values[index][fieldName] = event.target.value;
    setFields(values);
  };

  const handleAddFields = () => {
    const newIndex = fields.length + 1;
    setFields([
      ...fields,
      {
        name: `Pozycja ${newIndex}`,
        length: '',
        width: '',
        quantity: '1',
        pricePerSqM: '',
      },
    ]);
  };

  const handleRemoveFields = (index: number) => {
    const values = [...fields];
    values.splice(index, 1);
    setFields(values);
  };

  const totalArea = fields.reduce(
    (total, field) =>
      total +
      Number(field.length) * Number(field.width) * Number(field.quantity),
    0,
  );

  const totalPrice = fields.reduce(
    (total, field) =>
      total +
      Number(field.length) *
        Number(field.width) *
        Number(field.quantity) *
        Number(field.pricePerSqM),
    0,
  );

  const generatePDF = async () => {
    const onedoc = new Onedoc(process.env.NEXT_PUBLIC_ONEDOC as string);

    try {
      const isValid = fields.every(
        (field) =>
          field.length.trim() !== '' &&
          field.width.trim() !== '' &&
          field.quantity.trim() !== '' &&
          field.pricePerSqM.trim() !== '' &&
          Number(field.length) > 0 &&
          Number(field.width) > 0 &&
          Number(field.quantity) > 0 &&
          Number(field.pricePerSqM) > 0,
      );

      if (!isValid) {
        setPdfGenerationError(
          'Wypełnij wszystkie pola i upewnij się, że żadne pole nie zawiera wartości ujemnej.',
        );
        return;
      }
      setPdfGenerationError('');

      const doc = {
        html: await compile(
          <Tailwind>
            <div>
              <div className="mb-12 flex items-end justify-between pb-4">
                <div>
                  <h1 className="text-2xl font-bold">
                    {pricingName.trim() || 'Wycena'}
                  </h1>
                  <p className="text-xs">{new Date().toLocaleDateString()}</p>
                </div>
                <Logo />
              </div>

              <div className="text-right">
                <p className="mb-1 p-0">
                  <b>AN-MAR Parapety</b>
                </p>
                <p className="mb-1 p-0">Stawiguda 11-034,</p>
                <p className="mb-1 p-0">ul. Fermowa 2</p>
              </div>

              <table className="my-20 w-full">
                <tr className="border-b border-gray-300">
                  <th className="py-2 text-left font-bold">Pozycja</th>
                  <th className="py-2 text-left font-bold">Wymiar</th>
                  <th className="py-2 text-left font-bold">Ilość sztuk</th>
                  <th className="py-2 text-left font-bold">Cena</th>
                </tr>

                {fields.map((field, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-300"
                  >
                    <td className="py-2">{field.name}</td>
                    <td className="py-2">
                      {field.length}m x {field.width}m
                    </td>
                    <td className="py-2">{field.quantity}szt</td>
                    <td className="py-2">
                      {(
                        Number(field.length) *
                        Number(field.width) *
                        Number(field.quantity) *
                        Number(field.pricePerSqM)
                      ).toFixed(2)}
                      zł
                    </td>
                  </tr>
                ))}

                <tr className="border-b border-gray-300">
                  <th
                    scope="row"
                    colSpan={3}
                    className="text-left"
                  >
                    Całkowita cena
                  </th>
                  <td className="py-2 font-bold">
                    {totalPrice.toFixed(2)}zł netto
                  </td>
                </tr>
              </table>

              <p className="text-sm">
                Ta wycena ma charakter informacyjny i nie stanowi oferty
                handlowej ani potwierdzenia zakupu
              </p>
            </div>
          </Tailwind>,
        ),
        title: pricingName.trim() || 'Wycena',
        save: true,
        test: false,
        expiresIn: 14,
      };

      setPdfGeneration(true);
      setPdfGenerationLink('');

      const { link } = await onedoc.render(doc);
      setPdfGenerationLink(link);
      setPdfGeneration(false);
    } catch (err) {
      console.log('blad');
      setPdfGenerationError(
        'Wystąpił błąd podczas generowania wyceny. Spróbuj ponownie później lub skontaktuj się z nami.',
      );
    }
  };

  return (
    <div>
      {fields.map((field, index) => (
        <div
          key={`${field}-${index}`}
          className="my-10 lg:my-4"
        >
          <div className="flex flex-col items-start gap-x-4 gap-y-2 lg:flex-row lg:items-center">
            <div className="flex w-full items-center justify-between gap-2 lg:w-auto">
              <span className="pr-4 text-center text-xs font-semibold text-primary-500">
                <input
                  type="text"
                  name="position"
                  value={field.name}
                  onChange={(event) => handleInputChange(index, event, 'name')}
                  className={`block w-[120px] rounded-md border border-gray-300 bg-gray-50 p-2 text-sm font-light shadow outline-none duration-200 focus-visible:bg-gray-100 focus-visible:ring-2 focus-visible:ring-gray-300 disabled:cursor-not-allowed disabled:opacity-70`}
                />
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
                onChange={(event) => handleInputChange(index, event, 'length')}
                className={`block rounded-md border border-gray-300 bg-gray-50 p-2 text-sm font-light shadow outline-none duration-200 focus-visible:bg-gray-100 focus-visible:ring-2 focus-visible:ring-gray-300 disabled:cursor-not-allowed disabled:opacity-70`}
              />
            </label>
            <label className="flex w-full items-center gap-4 text-sm font-normal lg:w-auto lg:flex-col lg:items-start lg:gap-0 2xl:flex-row 2xl:items-center 2xl:gap-2">
              Szerokość (metry)
              <input
                type="number"
                name="width"
                value={field.width}
                onChange={(event) => handleInputChange(index, event, 'width')}
                className={`block rounded-md border border-gray-300 bg-gray-50 p-2 text-sm font-light shadow outline-none duration-200 focus-visible:bg-gray-100 focus-visible:ring-2 focus-visible:ring-gray-300 disabled:cursor-not-allowed disabled:opacity-70`}
              />
            </label>
            <label className="flex w-full items-center gap-4 text-sm font-normal lg:w-auto lg:flex-col lg:items-start lg:gap-0 2xl:flex-row 2xl:items-center 2xl:gap-2">
              Ilość sztuk
              <input
                type="number"
                name="quantity"
                value={field.quantity}
                onChange={(event) =>
                  handleInputChange(index, event, 'quantity')
                }
                className={`block w-[100px] rounded-md border border-gray-300 bg-gray-50 p-2 text-sm font-light shadow outline-none duration-200 focus-visible:bg-gray-100 focus-visible:ring-2 focus-visible:ring-gray-300 disabled:cursor-not-allowed disabled:opacity-70`}
              />
            </label>
            <label className="flex w-full items-center gap-4 text-sm font-normal lg:w-auto lg:flex-col lg:items-start lg:gap-0 2xl:flex-row 2xl:items-center 2xl:gap-2">
              Cena za m²
              <input
                type="number"
                name="pricePerSqM"
                value={field.pricePerSqM}
                onChange={(event) =>
                  handleInputChange(index, event, 'pricePerSqM')
                }
                className={`block w-[100px] rounded-md border border-gray-300 bg-gray-50 p-2 text-sm font-light shadow outline-none duration-200 focus-visible:bg-gray-100 focus-visible:ring-2 focus-visible:ring-gray-300 disabled:cursor-not-allowed disabled:opacity-70`}
              />
            </label>
            <p className="text-sm">
              Częściowa powierzchnia:{' '}
              <span className="text-base font-semibold">
                {(
                  Number(field.length) *
                  Number(field.width) *
                  Number(field.quantity)
                ).toFixed(3)}{' '}
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
          <span className="text-base font-semibold">
            {totalArea.toFixed(3)} m²
          </span>
        </p>
        <p>
          Całkowita cena:{' '}
          <span className="text-base font-semibold">
            {totalPrice.toFixed(2)}zł netto
          </span>
        </p>
      </div>
      <div className="mt-20 rounded-md bg-gray-200 px-4 py-2">
        <div className="flex flex-col items-center  md:flex-row md:justify-between">
          <label className="flex items-center gap-2 text-sm font-semibold ">
            Opcjonalny tytuł wyceny
            <input
              type="text"
              value={pricingName}
              onChange={(e) => setPricingName(e.target.value)}
              className={`block w-[100px] rounded-md border border-gray-300 bg-gray-50 p-2 text-sm font-light shadow outline-none duration-200 focus-visible:bg-gray-100 focus-visible:ring-2 focus-visible:ring-gray-300 disabled:cursor-not-allowed disabled:opacity-70`}
            />
          </label>
          <button
            onClick={() => generatePDF()}
            disabled={pdfGeneration}
            className="my-4 block rounded-md bg-primary-500 px-4 py-2 text-center text-sm text-white shadow outline-none duration-200 hover:bg-primary-400 focus-visible:bg-primary-400 active:bg-primary-600 disabled:cursor-wait"
          >
            Wygeneruj wycenę jako plik PDF
          </button>
        </div>
      </div>
      {pdfGenerationLink && (
        <a
          href={pdfGenerationLink}
          target="_blank"
          rel="noopener"
          className="mt-4 flex items-center gap-2 text-[#0969DA] underline"
        >
          Wygenerowana wycena
          <ArrowRight
            size={24}
            weight="regular"
          />
        </a>
      )}
      {pdfGenerationError && (
        <p className="mt-4 text-error-500">{pdfGenerationError}</p>
      )}
    </div>
  );
};

export default AreaCalculator;
