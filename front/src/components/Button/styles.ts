import styled from "styled-components";

export const Container = styled.button`
    height: 50px ;
    padding:10px 15px;

    display: flex;
    align-items: center;
    justify-content:center ;

    background-color: ${(props) => props.theme.verdeClaro};
    color: ${(props) => props.theme.branco};

    border-radius: 8px;
    border-style: none;

    font-size: 1rem;
    font-family:'Nunito', sans-serif ;
    font-weight:600 ;
    cursor:pointer;

    &:hover {
      filter:brightness(0.9)
  }

`;

