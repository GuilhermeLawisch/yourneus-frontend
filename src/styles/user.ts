import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 90vh;

  font-family: 'Roboto';

  form {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;

    background-color: transparent;
    border-radius: 5px;
    border: 1px hsl(0, 0%, 75%) solid;
    padding: 2rem;

    input[type=text],
    input[type=password],
    button {
      font-size: 1rem;
      padding: 0.4rem;
      width: 20rem;

      background: transparent;
      border: 1px rgba(0, 0, 0, 0.5) solid;
      border-radius: 2px;
      box-shadow: inset 0 0.1rem 0.2rem rgb(0 0 0 / 20%)
    }
  }
  form.dark {
    input[type=text],
    input[type=password],
    button {
      background: transparent;
      border: 1px hsl(0, 0%, 75%) solid;
      box-shadow: 0;
    }
  }
`;
