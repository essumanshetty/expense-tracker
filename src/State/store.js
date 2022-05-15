import { createStore } from "redux";

import { TEST, ADD_NEW_TRANSACTION, FILTER_TRANSACTIONS } from "./ActionTypes";

const initialState = {
  totalBalance: 0,
  totalIncome: 0,
  totalExpense: 0,
  transactions: [],
  searchResults: [],

};

let reducer = (state = initialState, action) => {
  switch (action.type) {
    case TEST:
      console.log(state);
      break;
    case ADD_NEW_TRANSACTION:
      //   console.log('payload ', action.payload.amount);
      let temp = state.transactions;
      let balance = state.totalBalance;
      let totalExpense = state.totalExpense;
      let totalIncome = state.totalBalance;

      temp.push(action.payload);

      if (action.payload.type === "Expense") {
        balance = balance - action.payload.amount;
        totalExpense += action.payload.amount;
      } else {
        balance = balance + action.payload.amount;
        totalIncome += action.payload.amount;
      }

      // console.log("Temp....", temp)
      return {
        ...state,
        totalBalance: balance,
        totalExpense: totalExpense,
        totalIncome: totalIncome,
        transactions: temp,
        searchResults: state.transactions,
      };

    case FILTER_TRANSACTIONS:
      let filterSearch = state.transactions;
      // console.log(" Before Filter Search ....",filterSearch);

      filterSearch = filterSearch.filter((res) =>
        res.description.includes(action.payload)
      );

      // console.log("After Filter Search ....",filterSearch)
      return {
        ...state,
        searchResults: filterSearch,
      };

    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
