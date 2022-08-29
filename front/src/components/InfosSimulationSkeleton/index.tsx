import { useState } from "react";
import { FiArrowUp } from "react-icons/fi";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { color } from "../../global/styles";
import { Modal } from "../Modal";
import { Card, CardsWrapper, Container } from "./styles";
import "react-loading-skeleton/dist/skeleton.css";

export function InfosSimulationSkeleton() {
  const theme = color;

  return (
    <Container theme={theme}>
      <SkeletonTheme
        baseColor="rgb(255,255,255,0.05)"
        highlightColor="rgb(255,255,255,0.10)"
      >
        <CardsWrapper theme={theme}>
          <Card theme={theme}>
            <p className="priceTitle">Quantidade</p>
            <h2>
              <Skeleton height={40} width={150} />
            </h2>
          </Card>
          <Card theme={theme}>
            <p className="priceTitle">Hoje</p>
            <h2>
            <Skeleton height={40} width={150}/>
            </h2>
          </Card>
          <Card theme={theme}>
            <p className="priceTitle"><Skeleton height={20} width={150} /></p>
            <h2>
              <Skeleton height={40} width={150} />
            </h2>
          </Card>
          <Card theme={theme} style={{ marginRight: 0 }}>
            <p className="priceTitle">Ganho de capital</p>
            <h2>
              <Skeleton height={40} width={150} />
            </h2>
          </Card>
        </CardsWrapper>
      </SkeletonTheme>
    </Container>
  );
}
