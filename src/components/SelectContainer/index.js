import React, { useState, useRef } from "react";

import { Container, Button, UnderButton } from "./styles";

const refSelector = React.createRef();

function SelectContainer () {
  const [condition, setCondition] = useState([
    "selected",
    "non-selected",
    "under-selected",
    "under-non-selected",
    "Enter",
  ]);
  let counterOne = 0;
  let counterTwo = 1;
  let counterThree = 2;
  let counterfour = 3;

  function toSelectFirst() {
    if (condition[0] !== "selected") {
      setCondition([
        "selected",
        "non-selected",
        "under-selected",
        "under-non-selected",
        "enter",
      ]);
      --counterOne;
      ++counterTwo;
      --counterThree;
      ++counterfour;
    }
  }
  function toSelectSecond() {
    if (condition[1] !== "selected") {
      setCondition([
        "non-selected",
        "selected",
        "under-non-selected",
        "under-selected",
        "out"
      ]);

      ++counterOne;
      --counterTwo;
      ++counterThree;
      --counterfour;
    }
  }

  return (
    <Container ref={refSelector} id={condition[4]} >
      <Button id={condition[counterOne]} onClick={toSelectFirst}>
        Entrada
      </Button>
      <Button id={condition[counterTwo]} onClick={toSelectSecond}>
        Saída
      </Button>
      <UnderButton id={condition[counterThree]} isUnder={true}></UnderButton>
      <UnderButton id={condition[counterfour]} isUnder={true}></UnderButton>
    </Container>
  );
}


