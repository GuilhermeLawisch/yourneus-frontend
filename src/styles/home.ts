import styled from "styled-components";

export const Container = styled.section`
  .dark {
    background: var(--background-dark);
    height: 100vh;
  }

  max-width: 1080px;
  width: 90%;
  margin: auto;

  .highlighted1 {
    grid-area: highlighted1;
    height: 70vh;
  }
  .highlighted2 {
    grid-area: highlighted2;
    height: 100%;
  }
  .highlighted3 {
    grid-area: highlighted3;
    height: 100%;
  }

  .cardsHighlighted {
    display: grid;
    grid-template-areas: 
    'highlighted1 highlighted2'
    'highlighted1 highlighted3';
    gap: 1.5rem;
    margin: auto auto 200px auto;

    position: relative;
    top: 100px;
    
    .card {
      width: 100%;
      padding: 1rem;

      background-color: var(--purple);

      font-family: 'Roboto';
    }
  }

  .cards {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;

    .card {
      width: 100%;
      height: 250px;
      padding: 1rem;

      background-color: var(--purple-pink);
      position: relative;
      
      font-family: 'Roboto';
    }
    
    .card::before {
      content: '';
      width: 100%;
      height: 1px;
      background-color: hsl(0, 0%, 75%);
      position: absolute;
      top: -1rem;
      left: 0;
    }

    .card.dark {
      background-color: var(--purple-pink);
    }
  }
  
  
`;