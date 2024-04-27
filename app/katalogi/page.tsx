"use client";

import Container from "components/shared/layout/Container";
import { Metadata } from "next";
import { Document, Page, pdfjs } from "react-pdf";

export const metadata: Metadata = {
  title: "AN-MAR Parapety | Katalogi",
  description:
    "Zapraszamy do odkrycia bogatej oferty parapetów AN-MAR - wiodącego producenta i sprzedawcy parapetów zewnętrznych, parapetów wewnętrznych oraz okien.",
};

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const CataloguesPage = () => {
  const catalogues = [
    {
      id: 1,
      href: "/katalogi/katalog-stal-aluminium.pdf",
    },
    {
      id: 2,
      href: "/katalogi/katalog-pcv.pdf",
    },
    {
      id: 3,
      href: "/katalogi/katalog-mdf.pdf",
    },
    {
      id: 4,
      href: "/katalogi/katalog-konglomerat-marmurowy.pdf",
    },
    {
      id: 5,
      href: "/katalogi/katalog-konglomerat-syntetyczny.pdf",
    },
  ];

  return (
    <div className="pb-24 pt-16">
      <Container>
        <h1 className="mb-8 text-center text-4xl font-bold lg:text-start">
          Katalogi
        </h1>

        <div className="flex flex-col flex-wrap items-center justify-center gap-5 md:flex-row lg:justify-start">
          {catalogues.map((catalogue) => (
            <a
              key={catalogue.id}
              href={catalogue.href}
              target="_blank"
              rel="noopener noreferrer"
              className="aspect-[0.71/1] w-[400px] border border-gray-300 shadow-lg duration-200 hover:scale-[102%] xl:w-[300px]"
            >
              <Document
                loading={<div className="text-center">Ładowanie katalogu</div>}
                file={catalogue.href}
                renderMode="canvas"
              >
                <Page
                  loading=""
                  pageNumber={1}
                  renderAnnotationLayer={false}
                  renderTextLayer={false}
                />
              </Document>
            </a>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default CataloguesPage;
