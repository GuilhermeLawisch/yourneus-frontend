import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 90vh;

  >div {
    font-family: 'Roboto';

    >div {
      display: grid;
      grid-template-columns: 1fr;
      gap: 1.2rem;

      text-align: center;

      background: transparent;
      border: 1px hsl(0, 0%, 75%) solid;
      box-shadow: 0;
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

          font-family: 'Roboto';

          padding: 0.5rem;
          font-size: 1.2rem;
        }

        textarea::placeholder {
          font-family: 'Roboto';
        }

        >div {
          display: flex;
          align-items: center;
          justify-content: space-between;

          button {
            width: 49%;
          }
        }
      }

      button {
        height: 3rem;
        font-size: 1.2rem;

        background: transparent;
        border: 1px rgba(0, 0, 0, 0.5) solid;
        border-radius: 2px;
        box-shadow: 0 .15rem .3rem rgba(0,0,0,.15),inset 0 .1rem .2rem #f2f2f2,inset 0 -.1rem .1rem rgba(0,0,0,.05);

        transition: background 0.2s;
      }

      button:hover {
        background: rgba(0, 0, 0, 0.05);
      }
    }
  }

  .dark {
    input[type=text],
    select,
    textarea,
    button {
      background: transparent;
      border: 1px hsl(0, 0%, 75%) solid;
      box-shadow: 0;
      color: #fff;
    }

    button:hover {
      background: rgba(0, 0, 0, 0.1);
    }
  }
`;