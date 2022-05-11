import styled from "styled-components";

const Container = styled.div`
  margin: 8px 8px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 8px;
  margin: 8px 0;
  border-right: ${({ expense }) =>
    expense ? "4px solid red" : "4px solid green"};
`;

const H4 = styled.h4`
  font-size: 17px;
`;

const Input = styled.input`
  background-color: #eee;
  padding: 8px;
  border: 0;
  outline: 0;
  border-radius: 4px;
  width: 100%;
  margin-top: 10px;
`;

const Typography = styled.span`
  font-size: 15px;
  font-weight: bold;
`;

export { Container, Row, H4, Input, Typography };
