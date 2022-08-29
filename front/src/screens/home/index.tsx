import { Header } from "../../components/Header";
import {
  Body,
  Card,
  CardsWrapper,
  Container,
  ContainerBody,
  Wrapper,
} from "./styles";
import Decoration from "../../assets/decoration.svg";

import { BsArrowRight } from "react-icons/bs";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

export function Home(props: any) {
  let navigate = useNavigate();

  const handleClickVehicle = useCallback(() => {
    navigate("/vehicle");
  }, [navigate]);
  const handleClickEmployee = useCallback(() => {
    navigate("/employee");
  }, [navigate]);
  const handleClickPetrolPump = useCallback(() => {
    navigate("/petrolPump");
  }, [navigate]);

  return (
    <Container>
      <Header visibleSearch={false} />
      <img className="imgDecoration" alt="decoration" src={Decoration} />
      <Body>
        <ContainerBody>
          <Wrapper>
            <span></span>
            <h1>Olá, qual ação deseja executar?</h1>
            <h3>Executar um processo</h3>
          </Wrapper>

          <CardsWrapper>
            <Card onClick={handleClickVehicle}>
              <div className="headerCard">
                <p className="strockDate">Cadastrar novos</p>
                <p className="strockValue">12</p>
              </div>
              <div className="bodyCard">
                <h3 className="strockName">Veículos</h3>
                <BsArrowRight
                  color={"white"}
                  size={26}
                  style={{ marginTop: 40 }}
                ></BsArrowRight>
              </div>
            </Card>
            <Card className="cardPrincipal" onClick={handleClickPetrolPump}>
              <div className="headerCard">
                <p className="strockDate">Visulizar</p>
                <p className="strockValue">4</p>
              </div>
              <div className="bodyCard">
                <h3 className="strockName">Bombas</h3>
                <BsArrowRight
                  color={"white"}
                  size={26}
                  style={{ marginTop: 40 }}
                ></BsArrowRight>
              </div>
            </Card>
            <Card onClick={handleClickEmployee}>
              <div className="headerCard">
                <p className="strockDate">Gerenciar</p>
                <p className="strockValue">8</p>
              </div>
              <div className="bodyCard">
                <h3 className="strockName">Funcionarios</h3>
                <BsArrowRight
                  color={"white"}
                  size={26}
                  style={{ marginTop: 40 }}
                ></BsArrowRight>
              </div>
            </Card>
          </CardsWrapper>
        </ContainerBody>
      </Body>
    </Container>
  );
}
