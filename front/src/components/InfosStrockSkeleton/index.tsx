import { useState } from "react";
import { FiArrowUp } from "react-icons/fi";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { color } from "../../global/styles";
import { Modal } from "../Modal";
import { Card, CardsWrapper, Container, WrapperTitle } from "./styles";
import "react-loading-skeleton/dist/skeleton.css";

export function InfosStrockSkeleton() {
  const theme = color;

  return (
    <Container theme={theme}>
      <SkeletonTheme
        baseColor="rgb(255,255,255,0.05)"
        highlightColor="rgb(255,255,255,0.10)"
      >
        <WrapperTitle>
          <Skeleton height={40} width={100} />
          <button className="buttonSimulation">Iniciar Simulação</button>
        </WrapperTitle>
        <CardsWrapper theme={theme}>
          <Card theme={theme} className="cardPrincipal">
            <p className="priceTitle">Preço Atual</p>
            <h2>
              <Skeleton height={40} width={150} />
            </h2>
          </Card>
          <Card theme={theme}>
            <p className="priceTitle">Menor valor esse mês</p>
            <Skeleton height={40} width={150}/>
          </Card>
          <Card theme={theme}>
            <p className="priceTitle">Maior valor esse mês</p>
            <h2>
              <Skeleton height={40} width={150} />
            </h2>
          </Card>
          <Card theme={theme} style={{ marginRight: 0 }}>
            <p className="priceTitle">Volume</p>
            <h2>
              <Skeleton height={40} width={150} />
            </h2>
          </Card>
        </CardsWrapper>
      </SkeletonTheme>
    </Container>
  );
}
