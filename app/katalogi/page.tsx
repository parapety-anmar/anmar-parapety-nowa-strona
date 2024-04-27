import Catalogues from "components/Catalogues/Catalogues";
import Container from "components/shared/layout/Container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AN-MAR Parapety | Katalogi",
  description:
    "Zapraszamy do odkrycia bogatej oferty parapetów AN-MAR - wiodącego producenta i sprzedawcy parapetów zewnętrznych, parapetów wewnętrznych oraz okien.",
};

const CataloguesPage = () => {
  return (
    <div className="pb-24 pt-16">
      <Container>
        <h1 className="mb-8 text-center text-4xl font-bold lg:text-start">
          Katalogi
        </h1>
        <Catalogues />
      </Container>
    </div>
  );
};

export default CataloguesPage;
