import React from "react";
import { connect } from "react-redux";

import { Container, Row, H4, H2 } from "../StyledComponents/OverViewStyles";

function OverViewComponent(props) {
  let {totalExpense, totalIncome } =props.overView;

  return (
    <Row>
      <Container>
        <H4>Expense</H4>
        <H2 expense>{totalExpense.toLocaleString('en-IN')} &#8377;</H2>
      </Container>
      <Container>
        <H4>Income</H4>
        <H2>{totalIncome.toLocaleString('en-IN')} &#8377;</H2>
      </Container>
    </Row>
  );
}

const mapStateToProps = (props) => {
  return {
    overView: props,
  };
};

export default connect(mapStateToProps) (OverViewComponent);
