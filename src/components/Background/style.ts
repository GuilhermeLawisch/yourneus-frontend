import styled from 'styled-components';

export const Container = styled.main`
  background: var(--background-white);
  position: relative;

  .no-visible {
    /* position: absolute;
    top: 50%;
    left: 50%;
    transform: matrix(-50%, -50%); */
    display: flex;
    align-items: center;
    justify-content: center;

    height: 100vh;

    >i {

      border: 16px solid rgba(0,0,0,0.1);
      border-radius: 50%;
      border-top: 16px solid var(--purple);
      width: 120px;
      height: 120px;
      -webkit-animation: spin 1.4s linear infinite; /* Safari */
      animation: spin 1.4s linear infinite;

      /* Safari */
      @-webkit-keyframes spin {
        0% { -webkit-transform: rotate(0deg); }
        100% { -webkit-transform: rotate(360deg); }
      }

      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    }
  }

  .dark {
    background: var(--background-dark);

    a,
    h1,
    h2,
    h3,
    p,
    span,
    button,
    label,
    input,
    input::placeholder {
      color: var(--text-dark-theme) !important;
    }
  }

`
