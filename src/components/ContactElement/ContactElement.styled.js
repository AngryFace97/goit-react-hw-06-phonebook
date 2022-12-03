import styled from "styled-components";
import crossIcon from './images/cross.svg';
import phoneIcon from './images/phone.svg';

export const Item = styled.li`
  &:not(:last-child) {
    margin-bottom: 5px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 3px;
  border-bottom: 1px solid gray;
`;

export const Button = styled.button`
  min-width: 18px;
  min-height: 18px;
  margin-left: 5px;
  border: 1px solid rgb(49, 49, 49);
  border-radius: 50%;
  background-color: #f0f0f0;
  background-image: url(${crossIcon});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 8px;
  transition: background-color 200ms;
`;

export const TelBtn = styled(Button)`
  margin-left: auto;
  background-image: url(${phoneIcon});
  background-size: 10px;
`;