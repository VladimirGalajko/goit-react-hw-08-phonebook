import styled from 'styled-components';
export const Div = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

`;

export const P = styled.p`
 font-weight: 700;

`;

export const Button = styled.button`
display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 4px;
  list-style-type: none;
  text-decoration: none;
  color: #8b9c94;
  background-color: #635656;
  transition: background-color 0.3s, color 0.3s;
  border-radius: 5px;
  border: none; 
  cursor: pointer;

  &:hover {
    background-color: #8c7c7c;
    color: #fff;
  }

  &.active {
    color: #0afd5b;
    background-color: #8c7c7c;
  }

`;