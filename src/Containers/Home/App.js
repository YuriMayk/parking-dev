import React, { useState } from "react";
import axios from "axios";
import TopContainer from "../../components/TopContainer";
import CentralContainer from "../../components/CentralContainer";
import Button from "../../components/Button";
import TextBox from "../../components/Input";
import Link from "../../components/Link";
import { ContainerConfim, ParagraphConfirm } from "./styles";
import LoadImage from "../../assets/loading.png";
import FinishImage from "../../assets/round-done-button.png";
let invoke = "";
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
  const refButtonEnter = React.createRef();
  const refButtonPay = React.createRef();
  const refButtonOut = React.createRef();
  const refCentral = React.createRef();

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

  function toFormatThePlateToEnter() {
    function plateVerifier(license) {
      if (license.length < 7) {
        alert("Por favor, insira o valor completo da placa!");
        return false;
      } else {
        return true;
      }
    }
    let license = ref.current.value.toUpperCase(); //Essa linha armazena o valor digitado pelo cliente, após apertar o botão.
    let check = plateVerifier(license); //Essa linha rodará a função responsável por verificar se todos os caracteres da placa foram digitados.
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

  function toFormatThePlateToPayAndOut() {
    function plateVerifier(license) {
      if (license.length < 7) {
        alert("Por favor, insira o valor completo da placa!");
        return false;
      } else {
        return true;
      }
    }
    let license = ref.current.value.toUpperCase(); //Essa linha armazena o valor digitado pelo cliente, após apertar o botão.
    let check = plateVerifier(license); //Essa linha rodará a função responsável por verificar se todos os caracteres da placa foram digitados.
    let formatedLicense =
      license[0] +
      license[1] +
      license[2] +
      "-" +
      license[3] +
      license[4] +
      license[5] +
      license[6];

    return formatedLicense;
  }

  function addNewLicense() {
    let requestPlate = toFormatThePlateToEnter();

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
  function ValidatePayment() {
    let formatedPlate = toFormatThePlateToPayAndOut();

    invoke = (
      <ContainerConfim>
        <ParagraphConfirm>
          Confima o pagamento
          <br /> da placa abaixo?
        </ParagraphConfirm>
        <ParagraphConfirm className={"Plate"}>{formatedPlate}</ParagraphConfirm>
        <Button
          onClick={ConfirmPayment}
          ref={refButtonPay}
          plateTyped={changeButton[0].typedAllPlate}
          visible={changeButton[0].visibilityCentralContainer}
          finishRegister={changeButton[0].finishRegister}
          error={changeButton[0].error}
          typeButton={"Pay"}
        >
          <span>CONFIRMAR</span>
        </Button>
      </ContainerConfim>
    );

    const url = "https://parking-lot-to-pfz.herokuapp.com/parking/";
    let completeRequest = url + formatedPlate + "/pay";
    console.log(completeRequest);
    async function ConfirmPayment() {
      invoke = (
        <ContainerConfim isTemporary={true}>
          <LoadImage />
          <ParagraphConfirm>Confirmando...</ParagraphConfirm>
        </ContainerConfim>
      );

      /*  setChangeButton([
        {
          typedAllPlate: false,
          visibilityCentralContainer: true,
          error: false,
          finishRegister: false,
        },
      ]); */

      const reservation = await axios
        .post(completeRequest)
        .then((response) => {
          invoke = (
            <ContainerConfim isTemporary={true}>
              <FinishImage />
              <ParagraphConfirm>PAGO!</ParagraphConfirm>
            </ContainerConfim>
          );
          /*   setChangeButton([
            {
              typedAllPlate: false,
              visibilityCentralContainer: true,
              error: false,
              finishRegister: true,
            },
          ]); */

          console.log(response.data);
        })
        .catch((error) => {
          invoke = (
            <ContainerConfim isTemporary={true}>
              <ParagraphConfirm>
                Este veículo já obteve pagamento validado!
              </ParagraphConfirm>
            </ContainerConfim>
          );
          console.log(error);
        });
    }
  }
  function ValidateOut() {
    let formatedPlate = toFormatThePlateToPayAndOut();

    invoke = (
      <ContainerConfim>
        <ParagraphConfirm>
          Confima o pagamento
          <br /> da placa abaixo?
        </ParagraphConfirm>
        <ParagraphConfirm className={"Plate"}>{formatedPlate}</ParagraphConfirm>
        <Button
          onClick={ConfirmExit}
          ref={refButtonPay}
          plateTyped={changeButton[0].typedAllPlate}
          visible={changeButton[0].visibilityCentralContainer}
          finishRegister={changeButton[0].finishRegister}
          error={changeButton[0].error}
          typeButton={"Pay"}
        >
          <span>CONFIRMAR</span>
        </Button>
      </ContainerConfim>
    );

    const url = "https://parking-lot-to-pfz.herokuapp.com/parking/";
    let completeRequest = url + formatedPlate + "/out";
    console.log(completeRequest);
    async function ConfirmExit() {
      invoke = (
        <ContainerConfim isTemporary={true}>
          <LoadImage />
          <ParagraphConfirm>Confirmando...</ParagraphConfirm>
        </ContainerConfim>
      );

      /*  setChangeButton([
        {
          typedAllPlate: false,
          visibilityCentralContainer: true,
          error: false,
          finishRegister: false,
        },
      ]); */

      const reservation = await axios
        .post(completeRequest)
        .then((response) => {
          invoke = (
            <ContainerConfim isTemporary={true}>
              <FinishImage />
              <ParagraphConfirm>SAÍDA LIBERADA</ParagraphConfirm>
            </ContainerConfim>
          );
          /*   setChangeButton([
            {
              typedAllPlate: false,
              visibilityCentralContainer: true,
              error: false,
              finishRegister: true,
            },
          ]); */

          console.log(response.data);
        })
        .catch((error) => {
          invoke = (
            <ContainerConfim isTemporary={true}>
              <ParagraphConfirm>
                Este Veículo não está dentro do estacionamento!
              </ParagraphConfirm>
            </ContainerConfim>
          );
          console.log(error);
        });
    }
  }

  return (
    <div className="App">
      <TopContainer></TopContainer>
      <div>
        {invoke}
        <CentralContainer
          isTemporary
          ref={refCentral}
          selectedPage={props.selectedPage}
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
            pagechanged={false}
            type="text"
          ></TextBox>
          <Button
            ref={refButtonEnter}
            plateTyped={changeButton[0].typedAllPlate}
            visible={changeButton[0].visibilityCentralContainer}
            finishRegister={changeButton[0].finishRegister}
            error={changeButton[0].error}
            typeButton={"Enter"}
            changinPageSelect={false}
            onClick={addNewLicense}
          >
            <span>CONFIRMAR ENTRADA</span>
          </Button>
          <Button
            ref={refButtonPay}
            plateTyped={changeButton[0].typedAllPlate}
            visible={changeButton[0].visibilityCentralContainer}
            finishRegister={changeButton[0].finishRegister}
            error={changeButton[0].error}
            typeButton={"Pay"}
            onClick={ValidatePayment}
          >
            <span>PAGAMENTO</span>
          </Button>
          <Button
            ref={refButtonOut}
            plateTyped={changeButton[0].typedAllPlate}
            visible={changeButton[0].visibilityCentralContainer}
            finishRegister={changeButton[0].finishRegister}
            error={changeButton[0].error}
            typeButton={"Out"}
            onClick={ValidateOut}
          >
            <span>SAÍDA</span>
          </Button>
          <Link value="VER HISTÓRICO">
            <span>VER HISTÓRICO</span>
          </Link>
        </CentralContainer>
      </div>
    </div>
  );
}

export default App;
