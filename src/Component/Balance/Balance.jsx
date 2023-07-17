"use client"
import React, { useContext } from 'react'
import styles from "./Balance.module.css"
import { GlobalContext } from '../../context/GlobalState'
const Balance = () => {
  const {transactions}=useContext(GlobalContext);
  const amount=transactions.map(transactions=>transactions.amount);
  const total=amount.reduce((acc,item)=>(acc+=item),0).toFixed(2);
  const post=amount.filter(item=>item>0).reduce((acc,item)=>(acc+=item),0).toFixed(2);
  const neg=amount.filter(item=>item<0).reduce((acc,item)=>(acc+=item),0).toFixed(2);
  return (
    <div className={styles.container}>
    <div className={styles.Balance}>
      <div>YOUR BALANCE</div>
      <div>
        <h3 style={{margin:0}}>${total}</h3></div>
    </div>
    <div className={styles.BalanceBox}>
        <div className={styles.income} >
            <div>Income</div>
            <div>${post}</div>
        </div >
        <div className={styles.expense}>
            <div>Expense</div>
            <div>${neg}</div>
        </div>
    </div>
    
    </div>
  )
}

export default Balance
