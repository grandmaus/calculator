import styled from 'styled-components'

import IconGithub from './img/icon-github.svg'

export const CopyrightStyled = styled.a`
  display: inline-block;
  padding-top: 20px;
  font-size: 18px;
  text-align: center;
  color: #5f6267;
  transition: 0.3s;

  &:hover {
    opacity: 0.7;
  }

  &::before {
    content: '';
    display: inline-block;
    vertical-align: bottom;
    width: 25px;
    height: 25px;
    margin-right: 10px;
    background-image: url(${IconGithub});
    background-size: cover;
    background-repeat: repeat;
  }
`
