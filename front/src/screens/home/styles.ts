import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex:1;
  flex-direction:column ;
  min-height:100vh ;
  max-width:100vw;
  background-color: ${(props) => props.theme.background};
  position: relative;
  z-index:1 ;

  .imgDecoration{
    position: absolute;
    right: 0;
    top:30vh;
    width:400px;
    z-index:-5 ;

    @media screen and (max-width: 1150px) {
      top:80%;
      bottom:0 ;
      filter:opacity(0.1)  ;
    }
  }
`;


export const Body = styled.main`
  flex:12;
  margin:10px 550px 40px 150px;

  @media screen and (max-width: 1150px) {
    margin:10px 30px 40px 30px;
    }
`;


export const ContainerBody = styled.main`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  margin-top: 130px;

  span {
    background-color: white;
    height: 4px;
    width: 30px;
    border-radius: 10px;
  }

  @media screen and (max-width: 1150px) {
  margin-top: 0px;
    }
`;

export const Wrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;


  h1 {
    font-family: "Nunito";
    font-style: normal;
    font-size: 40px;
    font-weight: 400;
    color: white;

    br{
      display:none ;
    }

    @media screen and (max-width: 1150px) {
    font-size: 30px;
    br{
      display:block ;
    }
    }
  }
  h3 {
    font-family: "Nunito";
    font-style: italic;
    font-weight: 400;
    color: ${(props) => props.theme.cinza};
    margin-top: -20px;

    @media screen and (max-width: 1150px) {
    font-size: 20px;    
    }
  }

  .buttonCompare {
    font-family: "Nunito";
    background-color: transparent;
    color: ${(props) => props.theme.verdeClaro};
    border: none;
    margin-top: 10px;
    text-decoration: underline;
    font-size: 18px;
    cursor: pointer;
  }

  .groupInputs {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
      margin: 0px 20px;
    }
    @media screen and (max-width: 1150px) {
      flex-direction:column ;
      width:100% ;
      max-width:400px ;
    }
  }
`;

export const CardsWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;

  margin-top: 20px;

  @media screen and (max-width: 1150px) {
   flex-wrap:wrap ;
    }

  .cardPrincipal {
    background: linear-gradient(
      to right bottom,
      ${(props) => props.theme.verdeClaro},
      ${(props) => props.theme.ciano}
    );
  }
`;

export const Card = styled.div`
  box-sizing: content-box;
  border-width: 2px;
  border-radius: 8px !important;
  border-style: solid;
  border-image: linear-gradient(
    to right bottom,
    ${(props) => props.theme.verdeClaro},
    ${(props) => props.theme.ciano}
  );
  border-image-slice: 1;
  margin-bottom: 10px;

  width: 260px;
  height: 116px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  padding: 20px 40px;
  margin-right: 20px;

  background-color: transparent;

  cursor: pointer;

  @media screen and (max-width: 1150px) {
   width:100% ;
   margin-right: 0px;
   padding:5px 15px ;
    }
  .headerCard {
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    .strockDate {  
      color: ${(props) => props.theme.cinza};
    }

    .strockValue {
      color: ${(props) => props.theme.branco};
    }
  }

  .bodyCard {
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    .strockName {
      color: ${(props) => props.theme.branco};
      font-size: 28px;
      font-family: "Nunito";
      margin-top: 5px;
    }
  }
`;
