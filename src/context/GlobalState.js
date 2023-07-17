"use client"
import { createContext,useReducer } from "react";
import AppReducer from"./AppReducer.js"
const initialState={
    transactions:[
    ]
}
export const GlobalContext=createContext(initialState);
export const GlobalProvider=({children})=>{

const [state,dispatch]=useReducer(AppReducer,initialState)


 
  const addTransaction=(transaction)=>{
      dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction
    });
  }
  const deleteTransaction=(id)=>{
    dispatch({
    type: 'DELETE_TRANSACTION',
    payload: id
  });
}
console.log(deleteTransaction)

 return (<GlobalContext.Provider value={{
    transactions: state.transactions,
   deleteTransaction,addTransaction
   
  }}>
        {children}
    </GlobalContext.Provider>)
}

// Sure! Here's an example of how you can create a Context API using React's createContext and provide the initial value with transactions, delete, and add functions:

// jsx
// Copy code
// import React, { createContext, useState } from 'react';

// // Create the initial context value
// const initialContextValue = {
//   transactions: [
//     {
//       id: 1,
//       text: 'flower',
//       amount: -20,
//     },
//     {
//       id: 2,
//       text: 'chocolate',
//       amount: -20,
//     },
//     {
//       id: 3,
//       text: 'emeis',
//       amount: 20,
//     },
//     {
//       id: 4,
//       text: 'flower',
//       amount: -200,
//     },
//   ],
//   deleteTransaction: () => {},
//   addTransaction: () => {},
// };

// Create the Context
// export const GlobalContext = createContext(initialContextValue);

// // Create the Provider component
// export const GlobalProvider = ({ children }) => {
//   const [transactions, setTransactions] = useState(initialContextValue.transactions);

//   // Delete Transaction function
//   const deleteTransaction = (id) => {
//     const updatedTransactions = transactions.filter((transaction) => transaction.id !== id);
//     setTransactions(updatedTransactions);
//   };

//   // Add Transaction function
//   const addTransaction = (newTransaction) => {
//     const updatedTransactions = [...transactions, newTransaction];
//     setTransactions(updatedTransactions);
//   };

//   // Create the context value
//   const contextValue = {
//     transactions,
//     deleteTransaction,
//     addTransaction,
//   };

//   return (
//     <GlobalContext.Provider value={contextValue}>
//       {children}
//     </GlobalContext.Provider>
//   );
// };