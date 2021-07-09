import styled from "styled-components";

export const Container = styled.section`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  font-family: 'Roboto';

  >div {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.2rem;

    text-align: center;

    background-color: #fff;
    border-radius: 5px;
    padding: 1rem;

    form {
      display: grid;
      grid-template-columns: 1fr;
      gap: 1.2rem;

      width: min(80vw, 1080px);

      input,
      select {
        padding: 0.5rem;
        font-size: 1.2rem;
      }

      textarea {
        resize: vertical;
        min-height: 20vh;
        max-height: 75vh;

        padding: 0.5rem;
        font-size: 1.2rem;
      }

      textarea::placeholder {
        font-family: 'Roboto';
      }
    }

    button {
      height: 3rem;
      font-size: 1.2rem;
    }
  }

`;