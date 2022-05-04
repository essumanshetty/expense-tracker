import React from "react";
import {
  Container,
  Row,
  Column,
  H3,
  Button,
} from "../StyledComponents/AddTransactionStyles";

function AddTransactionComponent() {
  return (
    <Container>
      <Row>
        <H3>Balance : 5000 &#8377;</H3>
        <Button>ADD</Button>
      </Row>
      <Column>
        <input type="number" placeholder="Amount" />
        <input type="text" placeholder="Description" />
      </Column>
      <Container>
        <input type="radio" id="expense" name="balance" value="Expense" />
        <label htmlFor="expense">Expense</label>
        <input type="radio" id="income" name="balance" value="Income" />
        <label htmlFor="expense">Income</label>
      </Container>
    </Container>
  );
}

export default AddTransactionComponent;
