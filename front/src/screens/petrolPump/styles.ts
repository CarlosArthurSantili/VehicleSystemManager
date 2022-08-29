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

export const WrapperTitle = styled.div`
  width: 100%;
  min-width: 570px;
  max-width: 1200px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 1470px) {
    width: 100%;
    min-width: 0px;
  }

  h1 {
    font-family: "Nunito";
    font-style: normal;
    font-size: 40px;
    font-weight: 400;
    color: white;
  }
  .buttonSimulation {
    font-family: "Nunito";
    background-color: transparent;
    color: ${(props) => props.theme.verdeClaro};
    border-style: solid;
    border-width: 1px;
    border-color: ${(props) => props.theme.verdeClaro};
    border-radius: 8px;
    margin-top: 10px;
    font-size: 18px;
    padding: 10px 40px;
    cursor: pointer;

    &:hover {
      box-shadow: rgba(52, 235, 152, 0.35) 0px 3px 8px;
    }
  }
`;
