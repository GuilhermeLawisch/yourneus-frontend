import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 10vh;

  border-bottom: 1px hsl(0, 0%, 75%) solid;

  div.header {
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

    .center {
      position: absolute;
      left: 50%;
      transform: translate(-50%, 0);
      
      font-family: 'Roboto', sans-serif;
      font-weight: 700;

      span {
        color: hsl(295, 100%, 22%);
      }
    }

    .center.dark {
      span {
        color: hsl(295, 50%, 92%) !important;
      }
    }

    .right {
      display: flex;
      align-items: center;
      gap: 3rem;
    }

    div:first-child {
      font-family: 'Roboto', sans-serif;
      font-weight: 700;
    }

    nav ul {
      list-style: none;

      display: flex;
      gap: 2.5vw;

      font-family: 'Poppins', sans-serif;
      font-weight: 400;
      font-size: 1rem;
      text-transform: uppercase;

      /* position: relative; */
    }

    nav ul li {
      list-style: none;

      position: relative;

      display: flex;
      align-items: center;
    } 

    nav ul li a::after {
      content: '';
      background-color: var(--purple);
      width: 0%;
      height: 2px;
      position: absolute;
      top: max(6vh, 2.7rem);
      left: 0;
      right: 0;

      transition: 0.15s;
    }

    nav ul li:hover a::after {
      width: 100%;
    }

    .avatar {
      width: 42px;
      height: 42px;
      
      border-radius: 50%;
      margin-right: 1rem;
    }

    .avatar-github {
      margin-right: 1rem;
    }

    li.search {
      list-style: none;

      cursor: pointer;
      transition: 0.1s;

      display: flex;
      align-items: center;

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

    li.userinfo:hover {
      cursor: pointer;
    }

    li.on {
      input[type="text"] {
        width: 0;
      }
    }
  }
  
  @media (min-width: 1200px) {
    div.header {
      nav ul {
        font-size: 1.25rem !important;
      }
    }
  }
  
  @media (max-width: 500px) {
    >div {
      display: grid;
      grid-template-columns: 3fr;
    }

    .left nav {
      display: none;
    }
  
    .one,
    .two,
    .three {
      height: 5px;
      width: 100%;
      margin: 6px auto;

      transition-duration: 0.3s;
    }

    .left.light-left {
      .one,
      .two,
      .three {
        background-color: var(--title-dark-theme);
      }
    }

    .left.dark-left {
      .one,
      .two,
      .three {
        background-color: var(--title-light-theme);
      }
    }
  
    .menu-toggle {
      width: 40px;
      height: 40px;
      margin-right: 20px;
    }
  
    .left.on {
      position: absolute;
      top:0;
      left:0;
      
      width: 100vw;
      height: 100vh;
      
      z-index: 10;

      display: flex;
      justify-content: center;
      align-items: center;
    }
    
    .on.light-left {
      background-color: var(--background-dark);
    }

    .on.dark-left {
      background-color: var(--background-white);
    }
    
    .left.on nav {
      display: block;
    }
  
    .left.on .menu-toggle {
      position: absolute;
      right: 22px;
      top: 15px;
    }
  
    .left.on .menu-toggle .one {
      transform: rotate(45deg) translate(7px, 7px);
    }
  
    .left.on .menu-toggle .two {
      opacity: 0;
    }
  
    .left.on .menu-toggle .three {
      transform: rotate(-45deg) translate(8px, -9px);
    }
  
    .left.on nav ul {
      
      display: grid;
      grid-template-columns: 1fr;
      margin: auto;
    }
  
    .left.on nav ul li a{
      transition-duration: 0.5s;
      font-size: 1.2rem;
      line-height: 2rem;
      display: block;
      padding: 2.2rem;

      margin: auto;
    }

    .left.on nav ul li a::after {
      top: 4rem;
    }

    .left.on {
      .avatar {
        margin-right: 0;
      }

      .avatar-github {
        margin-right: 0;
      }
    }
  }
`
