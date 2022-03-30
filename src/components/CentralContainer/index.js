import React, { useState, useRef } from "react";
import LoadImage from "../../assets/loading.png";
import FinishImage from "../../assets/round-done-button.png";
import ErrorSymbol from "../../assets/error-alert.png";

import {
  Container,
  ImageLoading,
  Paragraph,
  ImageFinish,
  ContainerError,
  ErrorImage,
  P,
  SelectContainer as SelContainer,
  Button,
  UnderButton,
} from "./styles";

const CentralContainer = React.forwardRef((props, ref) => {
  ++changedThePageNumber
  let changedThePageNumber = 1
  const [condition, setCondition] = useState([
    "selected",
    "non-selected",
    "under-selected",
    "under-non-selected",
    "Enter",
    true,
    false,
    changedThePageNumber,
    
  ]);
  let counterOne = 0;
  let counterTwo = 1;
  let counterThree = 2;
  let counterfour = 3;
  let childrenZero = props.children[0];
  let childrenOne = props.children[1];
  let childrenTwo = props.children[2];
  let childrenThree = props.children[3];
  let childrenFour = props.children[4];

  let parents = [];
  let paragraph = "Número da placa:";
  let infoVisibility = props.children[1].props.visible;
  let error = props.children[0].props.error;
  let finishRegister = props.children[1].props.finishRegister;
  let changedThePage = props.children[1].props.changinPageSelect;
  function toSelectFirst() {
    if (condition[0] !== "selected") {
      ++changedThePageNumber
      changedThePage = condition[5];
      setCondition([
        "selected",
        "non-selected",
        "under-selected",
        "under-non-selected",
        "Enter",
        true,
        false,
        changedThePage,
        changedThePageNumber
      ]);
      finishRegister = condition[6];
      --counterOne;
      ++counterTwo;
      --counterThree;
      ++counterfour;
    }
  }
  function toSelectSecond() {
    changedThePage = condition[6];
    if (condition[1] !== "selected") {
      changedThePage = true;
      setCondition([
        "non-selected",
        "selected",
        "under-non-selected",
        "under-selected",
        "out",
        false,
        true,
        changedThePage,
      ]);
      finishRegister = condition[5];
      ++counterOne;
      --counterTwo;
      ++counterThree;
      --counterfour;
      childrenZero.selectedPage = condition[6]
      console.log(childrenZero.selectedPage)
    }
  }
  if (condition[5] === true) {
    parents = [childrenZero, childrenOne];
  } else if (condition[6] === true) {
    parents = [childrenZero, childrenTwo, childrenThree, childrenFour];
  }

  if (infoVisibility === true) {
    paragraph = "Registrando...";
  }
  if (finishRegister === true) {
    paragraph = "REGISTRADO!";
  }
if (condition[6] === true) {
  paragraph ="Número da placa:"
}
  console.log(condition[6]);
  return (
    <Container selectedPage={condition[1]}>
      <SelContainer id={condition[4]}>
        <Button id={condition[counterOne]} onClick={toSelectFirst}>
          Entrada
        </Button>
        <Button id={condition[counterTwo]} onClick={toSelectSecond}>
          Saída
        </Button>
        <UnderButton id={condition[counterThree]} isUnder={true}></UnderButton>
        <UnderButton id={condition[counterfour]} isUnder={true}></UnderButton>
      </SelContainer>
      <ImageFinish
        pagechanged={condition[6]}
        finishRegister={finishRegister}
        error={error}
        src={FinishImage}
      />
      <ImageLoading
        pagechanged={condition[6]}
        finishRegister={finishRegister}
        error={error}
        visible={infoVisibility}
        src={LoadImage}
        alt="Imagem de carregamento"
      />
      <Paragraph
        pagechanged={condition[6]}
        finishRegister={finishRegister}
        error={error}
        visible={infoVisibility}
      >
        {paragraph}
      </Paragraph>
      {parents[0]}
      
      <ContainerError
        visible={infoVisibility}
        pagechanged={condition[5]}
        error={error}
      >
        <ErrorImage src={ErrorSymbol} />
        <P>Verifique a placa e tente novamente!</P>
      </ContainerError>{" "}
      {parents[1]}
      {parents[2]}
    </Container>
  );
});

export default CentralContainer;
