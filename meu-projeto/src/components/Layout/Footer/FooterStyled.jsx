import styled from "styled-components";

export const Rodape = styled.footer`
  ul {
    display: flex;
    justify-content: center;
    list-style: none;
  }

  li {
    font-size: 1.4em;
    padding: 2em;
    cursor: pointer;
    transition: all 0.7s ease-in-out;

    &:hover{
        position: relative;
        top: -2px;
    }
  }
`;
