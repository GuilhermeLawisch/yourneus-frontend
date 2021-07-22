import styled from "styled-components";

export const Container = styled.section`
  height: 90vh;

  >div {
    display: flex;
    align-items: center;
    justify-content: center;

    >div {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      background-color: transparent;
      border-radius: 5px;
      border: 1px hsl(0, 0%, 75%) solid;
      padding: 2rem;

      text-align: center;
      font-family: 'Roboto';

      display: grid;
      grid-template-columns: 1fr;
      gap: 1.2rem;

      form {
        display: grid;
        grid-template-columns: 1fr;
        gap: 1rem;

        input[type=text],
        input[type=password] {
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

      div {
        display: flex;
        align-items: center;
        justify-content: space-between;

        font-size: 0.8rem;
      }

      .buttons {
        display: grid;
        grid-template-columns: 1fr;
        gap: 0.5rem;
      }

      button {
        width: 100%;
        padding: 0.4rem;

        background: transparent;
        border: 1px rgba(0, 0, 0, 0.5) solid;
        border-radius: 2px;
        box-shadow: 0 .15rem .3rem rgba(0,0,0,.15),inset 0 .1rem .2rem #f2f2f2,inset 0 -.1rem .1rem rgba(0,0,0,.05);

        transition: background 0.1s;
      }

      button:hover {
        background: rgba(0, 0, 0, 0.05);
        cursor: pointer;
      }
    }
  }
`;
