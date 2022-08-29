import styled from "styled-components";

export const Container = styled.table`
  display: flex;
  flex-direction: column;

  width: 100%;

  .body {
    height: 70px;
    padding: 10px 15px;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    background-color: transparent;
    color: ${(props) => props.theme.branco};

    border-radius: 4px;
    border: 1px solid ${(props) => props.theme.verdeClaro};

    font-family: "Nunito", sans-serif;
    margin: 4px 0;
    cursor: pointer;
    &:hover {
      box-shadow: rgba(52, 235, 152, 0.35) 0px 3px 8px;
    }

    h4 {
      object-fit: cover;
      width: 200px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`;

export const Tr = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
`;
export const Th = styled.th`
  color: white;
  padding: 10px 15px;
`;
