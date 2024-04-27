"use client";

import XIcon from "components/shared/icons/X";
import Container from "components/shared/layout/Container";
import { useState } from "react";

const TemporaryInfo = () => {
  const [isShown, setIsShown] = useState(true);

  return (
    isShown && (
      <div className="relative bg-primary-700 bg-gradient-to-b from-primary-900 to-primary-600 py-1 text-center text-sm font-medium text-white">
        <Container>
          <p className="px-4 py-1">
            Szanowni Państwo, w związku ze zbliżającą się przerwą majową
            pragniemy poinformować, że w dniach 01.05 – 05.05.2024r. firma
            AN-MAR będzie nieczynna. Produkcja oraz dostawy zostaną wznowione z
            dniem 6 maja 2024r. Prosimy o uwzględnienie przerwy w harmonogramie
            dostaw.
          </p>
        </Container>
        <button
          onClick={() => setIsShown(false)}
          className="absolute right-1 top-1"
        >
          <XIcon size={20} weight="fill" />
        </button>
      </div>
    )
  );
};

export default TemporaryInfo;
