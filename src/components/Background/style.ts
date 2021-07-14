import styled from 'styled-components';

export const Container = styled.main`
  background: var(--background-white);

  .dark {
    background: var(--background-dark);

    a,
    h1,
    h2,
    h3,
    p,
    button,
    label,
    input,
    input::placeholder {
      color: var(--text-dark-theme) !important;
    }
  }

`
