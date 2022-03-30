import React, { useState } from "react";
import axios from "axios";
import TopContainer from "../../components/TopContainer";
import CentralContainer from "../../components/CentralContainer";
import Button from "../../components/Button";
import TextBox from "../../components/Input";
import { Link } from "./styles";

function App(...props) {
  const [changeButton, setChangeButton] = useState([
    {
      typedAllPlate: false,
      visibilityCentralContainer: false,
      error: false,
      finishRegister: false,
    },
  ]);
  const ref = React.createRef();
  const refButton = React.createRef();

  function inputVerifier(event) {
    if (event.target.value.length > 6) {
      console.log("Digitou Todas os caracteres.");
      setChangeButton([
        {
          typedAllPlate: true,
          visibilityCentralContainer: false,
          error: false,
          finishRegister: false,
        },
      ]);
    } else {
      setChangeButton([
        {
          typedAllPlate: false,
          visibilityCentralContainer: false,
          error: false,
          finishRegister: false,
        },
      ]);
    }
  }

  // A função abaixo é responsável por verificar se a placa é válida para rodar nesta aplicação.
  function plateVerifier(license) {
    if (license.length < 7) {
      alert("Por favor, insira o valor completo da placa!");
      return false;
    } else {
      return true;
    }
  }

  function addNewLicense() {
    let license = ref.current.value; //Essa linha armazena o valor digitado pelo cliente, após apertar o botão.

    let check = plateVerifier(license); //Essa linha rodará a função responsável por verificar se todos os caracteres da placa foram digitados.

    function toFormatThePlate() {
      let formatedLicense =
        license[0] +
        license[1] +
        license[2] +
        "-" +
        license[3] +
        license[4] +
        license[5] +
        license[6];

      const formatedPlate = '"' + formatedLicense + '"';

      return { plate: formatedPlate };
    }

    let requestPlate = toFormatThePlate();
    async function newLicense() {
      setChangeButton([
        {
          typedAllPlate: false,
          visibilityCentralContainer: true,
          error: false,
          finishRegister: false,
        },
      ]);

      const reservation = await axios
        .post("https://parking-lot-to-pfz.herokuapp.com/parking", requestPlate)
        .then((response) => {
          setChangeButton([
            {
              typedAllPlate: false,
              visibilityCentralContainer: true,
              error: false,
              finishRegister: true,
            },
          ]);

          console.log(
            response.data
          ); /* Esta linha será responsável por retornar a resposta da API. O padrão de resposta é :
          entered_at: "ano-mês-diaThora:minuto:segundo.milésimo+horaDoFusoHorário:MinutosdoFusoHorário"
          plate: "\"trêsPrimeirosDigitosDaPlaca-quatroÚltimosDigitosDaPlaca\""
          reservation: "númeroDaReserva" */
        })
        .catch((error) => {
          setChangeButton([
            {
              typedAllPlate: true,
              visibilityCentralContainer: false,
              error: true,
              finishRegister: false,
            },
          ]);
          console.log(error);
        });
    }

    newLicense();
  }
  return (
    <div className="App">
      <TopContainer></TopContainer>
      <div>
        <CentralContainer
          selected={""}
          visible={changeButton[0].visibilityCentralContainer}
          error={changeButton[0].error}
          finishRegister={changeButton[0].finishRegister}
        >
          <TextBox
            ref={ref}
            onChange={inputVerifier}
            plateTyped={changeButton[0].typedAllPlate}
            visible={changeButton[0].visibilityCentralContainer}
            error={changeButton[0].error}
            finishRegister={changeButton[0].finishRegister}
            type="text"
          ></TextBox>
          <Button
            ref={refButton}
            plateTyped={changeButton[0].typedAllPlate}
            visible={changeButton[0].visibilityCentralContainer}
            finishRegister={changeButton[0].finishRegister}
            error={changeButton[0].error}
            onClick={addNewLicense}
          >
            <span>PAGAMENTO</span>
          </Button>
          <Button
            ref={refButton}
            id={"exit"}
            plateTyped={changeButton[0].typedAllPlate}
            visible={changeButton[0].visibilityCentralContainer}
            finishRegister={changeButton[0].finishRegister}
            error={changeButton[0].error}
            onClick={addNewLicense}
          >
            <span>SAÍDA</span>
          </Button>

          <Link>VER HISTÓRICO</Link>

        </CentralContainer>
      </div>
    </div>
  );
}

export default App;
