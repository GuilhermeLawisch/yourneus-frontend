import styled from "styled-components";

export const Container = styled.section`
  .dark {
    background: var(--background-dark);
  }

  max-width: 1280px;
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
      width: min(42.5vw, 628px);
      padding: 2rem;
      position: relative;

      word-wrap: break-word;
      white-space: pre-line;

      background-color: var(--purple);

      font-family: 'Poppins';//'Roboto';

      cursor: pointer;

      h3 {
        font-size: 2.2rem;
      }
      
      p {
        text-transform: uppercase;

        position: absolute;
        right: 2rem;
        bottom: 2rem;
        font-size: 1.2rem;
      }
    }
  }

  .cards {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;

    padding-bottom: 1rem;

    .card {
      width: 100%;
      height: 250px;
      padding: 2rem;
      position: relative;

      background-color: var(--purple-pink);
      position: relative;
      
      font-family: 'Roboto';
      cursor: pointer;

      h3 {
        font-size: 1.8rem;
      }

      p.category {
        position: absolute;
        bottom: 2rem;
        right: 2rem;
        text-transform: uppercase;

        font-size: 1.1rem;
      }

      p.date {
        position: absolute;
        bottom: 2rem;
        left: 2rem;

        font-size: 1.1rem;
      }
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

  .show {
    height: 85vh;

    .search {
      margin-top: 5vh;

      .card::before {
        top: calc(250px + 1rem);
      }
    }
  }
`;