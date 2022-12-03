import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  width: 100%;
  padding: 15px;
  border: none;
  border-radius: 10px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  font-weight: 500;
`;

export const Input = styled.input`
  font-size: 14px;
  margin-top: 5px;
  padding: 5px;
  border: 1px solid gray;
  outline: none;
  line-height: 1.25;
  border-radius: 5px;
`;

export const Button = styled.button`
  max-width: 120px;
  margin: 0 auto;
  padding: 5px 10px;
  border: 1px solid rgb(161, 161, 161);
  border-radius: 5px;
  font-size: 14px;
  text-transform: capitalize;
  color: black;
  transition: color 1200ms, border-color 1200ms, background-color 1200ms, box-shadow 1200ms;

  &:hover {
    color: white;
    background-color: rgb(161, 161, 161);
    transition: color 600ms, border-color 600ms, background-color 600ms, box-shadow 600ms;
  }
`;