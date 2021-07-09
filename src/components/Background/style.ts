import styled from 'styled-components';

export const Container = styled.div`
  background: var(--background-white);

  .dark {
    background: var(--background-dark);

    a,
    h1,
    h2,
    h3,
    p {
      color: var(--text-dark-theme) !important;
    }
  }

`
