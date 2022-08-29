import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1400px) {
    align-items: flex-end;
  }

  background-color: rgb(0, 0, 0, 0.4);

  z-index: 10;
`;

export const Wrapper = styled.div`
  height: auto;
  width: auto;
  max-width: 50%;
  min-width: 30%;

  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;

  background-color: #161616;

  border-style: solid;
  border-color: #ffffff;
  border-radius: 16px;
  border-width: 2px;

  padding: 10px 20px;

  @media screen and (max-width: 1400px) {
    min-height: 450px;
    max-width: 100%;
    width: 100%;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  h1 {
    text-align: center;
  }

  p {
    text-align: center;
    max-width: 70%;

    font-size: 18;
    color: ${(props) => props.theme.cinza};
  }
  strong {
    color: ${(props) => props.theme.verdeClaro};
  }

  .group {
    width: 70%;
  }

  .groupTexts {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .buttonClose {
    outline: none;
    background-color: transparent;
    justify-content: center;
    display: flex;
    align-items: center;
    padding: 10px;
    border: none;
    height: 50px;
    width: 50px;
    cursor: pointer;
  }

  .groupInputs {
    width: 100%;
    margin-top: 20px;

    display: flex;
    flex-direction: column;
    justify-content: center;

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    input::-webkit-calendar-picker-indicator {
      filter: invert(1);
    }
    input[type="number"] {
      -moz-appearance: textfield;
    }
  }
`;
