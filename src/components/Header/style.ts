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
 
    .left {
      display: flex;
      align-items: center;
      gap: 2rem;

      span {
        color: hsl(295, 100%, 30%);
      }
    }

    .left.dark {
      span {
        color: hsl(295, 50%, 90%) !important;
      }
    }

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

      /* position: relative; */
    }

    nav ul li {
      position: relative;
    } 

    nav ul li a::after {
      content: '';
      background-color: var(--purple);
      width: 0%;
      height: 5px;
      position: absolute;
      top: min(6vh, 3.5rem);
      left: 0;
      right: 0;

      transition: 0.15s;
    }

    nav ul li a:hover::after {
      width: 100%;
    }

  }
  
`
