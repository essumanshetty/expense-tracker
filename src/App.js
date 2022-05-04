import React from "react";

// Components Import
import Header from './Components/Header';
import AddTransactionComponent from './Components/AddTransactionComponent';
import OverViewComponent from './Components/OverViewComponent';
import Transactions from './Components/Transactions';

// Style imports
import {Container} from './StyledComponents/AppStyles';

function App() {
  return <Container>
    <Header/>
    <AddTransactionComponent/>
    <OverViewComponent/>
    <Transactions/>
  </Container>;
}

export default App;
