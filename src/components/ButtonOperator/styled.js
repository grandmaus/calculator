import styled from 'styled-components'

export const ButtonOperatorStyled = styled.button`
  display: block;
  width: ${props => props.large ? '200px' : '100px'};
  height: 100px;
  padding: 10px;
  box-sizing: border-box;
  font-family: Arial, sans-serif;
  font-size: 32px;
  color: #ffffff;
  border: none;
  outline: 1px solid rgba(255, 255, 255, 0.5);
  background-color: #5f6267;
  transition: 0.3s;

  &:hover {
    background-color: rgba(95, 98, 103, 0.7)
  }
`
