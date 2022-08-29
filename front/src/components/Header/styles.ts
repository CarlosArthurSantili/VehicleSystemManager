import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 70px;

  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 15px 0px;
  background-color: ${(props) => props.theme.background};

  img {
    width: 100px;
    height: 100px;
  }

  .groupButtonsHeader {
    width: 100%;
    margin-left:50px ;

    @media screen and (max-width: 1150px) {
      margin: 0px 20px;
    }
  }

  .buttonMenu {
    display: flex;
    align-items: "center";
    justify-content: "center";

    background-color: transparent;
    border: none;
    cursor: pointer;

    margin: 0 20px;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0px 150px;

  @media screen and (max-width: 1150px) {
    margin: 0px 20px;
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 250px;
    margin-right: -10px;
  }
`;
