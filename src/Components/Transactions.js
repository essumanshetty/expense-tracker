import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import { FILTER_TRANSACTIONS } from "../State/ActionTypes";

import {
  Container,
  Row,
  H4,
  Input,
  Typography,
} from "../StyledComponents/TransactionsStyles";

function Transactions(props) {
  const inputRef = useRef(null);

  let { searchResults } = props.transactionsArray;
  // console.log(searchResults)
  useEffect(() => {
    if (inputRef) {
      inputRef.current.focus();
    }
  }, []);

  function inputChangeHandler(event) {
    console.log(event.target.value)
    props.filterTransaction(event.target.value);
  }

  return (
    <Container>
      <H4>Transactions</H4>
      <Input
        placeholder="Search"
        ref={inputRef}
        onChange={inputChangeHandler}
      />

      {searchResults &&
        searchResults.map((transaction, index) => (
          <Row key={index} expense={transaction.type === "Expense"}>
            <Typography>{transaction.description} </Typography>
            <Typography>{transaction.amount} &#8377;</Typography>
          </Row>
        ))}
    </Container>
  );
}

const mapStateToProps = (props) => {
  return {
    transactionsArray: props,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    filterTransaction: (payload) =>
      dispatch({ type: FILTER_TRANSACTIONS, payload: payload }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Transactions);
