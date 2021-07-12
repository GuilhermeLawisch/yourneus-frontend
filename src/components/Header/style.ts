import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 10vh;

  border-bottom: 1px hsl(0, 0%, 75%) solid;

  >div{
    display: flex;
    align-items: center;
    justify-content: space-between;

    max-width: 1280px;
    width: 90%;
    height: 100%;
    margin: auto;
 
    div:first-child {
      font-family: 'Roboto', sans-serif;
      font-weight: 700;
    }

    nav ul {
      list-style: none;

      display: flex;
      gap: 2rem;

      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      font-size: 1.2rem;
    }
  }
  
`
