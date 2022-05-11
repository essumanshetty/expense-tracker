import React, { useState } from "react";
import { connect } from "react-redux";
import { ADD_NEW_TRANSACTION } from "../State/ActionTypes";

import {
  Container,
  Row,
  Column,
  H3,
  Button,
  CustomButton,
} from "../StyledComponents/AddTransactionStyles";

function AddTransactionComponent(props) {
  const [addTxn, setIsAddTx] = useState(false);
  const [transaction, setTransaction] = useState({
    amount: "",
    description: "",
  });

  const [radioSelected, setRadioSelected] = useState("Expense");

  const toggleHandler = () => {
    setIsAddTx(!addTxn);
  };
  const handleOnChage = (event) => {
    setTransaction({
      ...transaction,
      [event.target.name]: [event.target.value],
    });
  };

  const addTransaction = () => {
    // console.log({ radioSelected }, { transaction });
    const payload = {
      amount: +transaction.amount[0], //Convert string to number (+)
      description: transaction.description[0],
      type: radioSelected,
    };
    props.addNewTransaction(payload);
    reset();
  };

  function reset() {
    setTransaction({
      amount: "",
      description: "",
    });
    toggleHandler();
    setRadioSelected("Expense")
  }
  return (
    <Container>
      <Row>
        <H3>Balance : {props.totalBalance.toLocaleString('en-IN')} &#8377;</H3>
        <Button onClick={toggleHandler}>{addTxn ? "Cancel" : "Add"}</Button>
      </Row>
      {addTxn && (
        <Container border>
          <Column>
            <input
              type="number"
              placeholder="Amount"
              name="amount"
              value={transaction?.amount}
              onChange={handleOnChage}
              min={0}
            />
            <input
              type="text"
              placeholder="Description"
              name="description"
              value={transaction?.description}
              onChange={handleOnChage}
            />
          </Column>
          <Container>
            <input
              type="radio"
              id="expense"
              name="balance"
              value="Expense"
              checked={radioSelected === "Expense"}
              onChange={() => setRadioSelected("Expense")}
            />
            <label htmlFor="expense">Expense</label>
            <input
              type="radio"
              id="income"
              name="balance"
              value="Income"
              checked={radioSelected === "Income"}
              onChange={() => setRadioSelected("Income")}
            />
            <label htmlFor="expense">Income</label>
          </Container>
          <Row center>
            <CustomButton onClick={addTransaction}>
              Add Transaction
            </CustomButton>
          </Row>
        </Container>
      )}
    </Container>
  );
}

const mapStateToProps = (props) => {
  return {
    totalBalance: props.totalBalance,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addNewTransaction: (payload) =>
      dispatch({ type: ADD_NEW_TRANSACTION, payload: payload }),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTransactionComponent);
