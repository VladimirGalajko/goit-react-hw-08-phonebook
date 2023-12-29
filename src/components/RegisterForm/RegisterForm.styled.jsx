import styled from 'styled-components';
export const Form = styled.form`
  width: 320px;

`;
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`

export const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  margin-bottom: 15px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Button = styled.button`
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #635656;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  &:hover {
    background-color: #8c7c7c;
  }
  &:active {
    transform: scale(0.9);
  }
`;
