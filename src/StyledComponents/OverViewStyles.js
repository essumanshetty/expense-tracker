import styled from "styled-components";

const Container = styled.div`
  border: 1px solid #ccc;
  border-radius : 4px;
  width : 100%;
  margin: 8px 8px;
  padding: 8px;

`;
const Row = styled.div`
    display:flex;
    justify-content: space-between;
    gap:10px;
`;

const H4 = styled.h4`
  font-size: 17px;
  margin-bottom : 8px;
`;

const H2 = styled.div`
  font-size: 19px;
  font-weight: bold;
  color: ${({ expense }) => (expense ? "red" : "green")};
`;
export { Container,Row, H4, H2 };
