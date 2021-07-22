import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 10vh;

  border-bottom: 1px hsl(0, 0%, 75%) solid;

  >div {
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
      gap: 3rem;

      span {
        color: hsl(295, 100%, 22%);
      }
    }

    .left.dark {
      span {
        color: hsl(295, 50%, 92%) !important;
      }
    }

    div:first-child {
      font-family: 'Roboto', sans-serif;
      font-weight: 700;
    }

    nav ul {
      list-style: none;

      display: flex;
      gap: 3rem;

      font-family: 'Poppins', sans-serif;
      font-weight: 400;
      font-size: 1.25rem;
      text-transform: uppercase;

      /* position: relative; */
    }

    nav ul li {
      position: relative;

      display: flex;
      align-items: center;
    } 

    nav ul li a::after {
      content: '';
      background-color: var(--purple);
      width: 0%;
      height: 4px;
      position: absolute;
      top: max(7.8vh, 3.7rem);
      left: 0;
      right: 0;

      transition: 0.15s;
    }

    nav ul li a:hover::after {
      width: 100%;
    }

    li.search {

      transition: 0.1s;

      input {
        border: 0;
        outline: 0;
        margin: 1rem 1rem 1rem 0;
        border-bottom: 1px solid hsl(0, 0%, 75%);
        background: transparent;
        width: 250px;
        
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
        font-size: 1.25rem;
        
        transition: 0.25s;
      }

      input::placeholder {
        color: hsl(0, 0%, 75%);
      }

      svg {
        cursor: pointer;
      }
    }

    li.on {
      input[type="text"] {
        width: 0;
      }
    }
  }
  
  @media (max-width: 425px) {
    >div {
      display: grid;
      grid-template-columns: 3fr;
      
    }

  }
`
