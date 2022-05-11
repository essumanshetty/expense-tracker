import styled from "styled-components";

const Container = styled.div`
  border: ${(props) => (props.border ? "1px solid #ccc" : null)};
  padding: 8px;
  // margin: 10px 0;
  margin-top: 10px;
  border-radius: 4px;
  & label {
    margin: 0 8px;
  }
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.center ? "center" : "space-between")};
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
  & input {
    width: 100%;
    outline: 0;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 8px;
    margin: 8px 0;
  }
`;

const H3 = styled.h3`
  font-size: 17px;
`;

const Button = styled.button`
  background-color: #000;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 13px;
  padding: 5px 10px;
  outline: 0;
  border: 0;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    filter:drop-shadow(0px 3px 6px #ccc)
  }
`;

const CustomButton = styled(Button)`
  margin: 10px 0;
`;

export { Container, Row, Column, H3, Button, CustomButton };
