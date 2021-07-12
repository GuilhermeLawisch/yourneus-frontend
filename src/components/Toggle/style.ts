import styled from 'styled-components';

export const Container = styled.aside`
  .switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
  }

  .input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    border-radius: 50px;

    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    background-color: var(--purple-pink);
    transition: 0.4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    border-radius: 50px;

    background-color: #fff;
    transition: 0.4s;
  }

  .input:checked + .slider {
    background-color: var(--purple);
  }

  .input:checked + .slider::before {
    transform: translateX(26px);
  }
  
  
`
