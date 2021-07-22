import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  text-align: center;

  height: 90vh;
  
  font-family: 'Roboto';//'Poppins';

  >div {
    max-width: 1080px;
    width: 90%;

    margin: 5vh auto 0 auto;

    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;

    h2 {
      font-size: 2.2rem;
    }

    p {
      font-size: 1.6rem;
    }

    span {
      text-align: end;
    }
  }
`;