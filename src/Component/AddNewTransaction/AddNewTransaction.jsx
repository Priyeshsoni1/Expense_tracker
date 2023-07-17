"use client"
import React, { useState,useContext } from 'react'
import styles from "./Add.module.css"
import { GlobalContext } from '@/context/GlobalState'
const AddNewTransaction = () => {
    const {addTransaction}=useContext(GlobalContext)
    const[text,setText]=useState("");
    const[amount,setAmount]=useState(0);
  
  
     const submit=(e)=>{
        e.preventDefault();

          const value={
        id:Math.floor(Math.random()*10000000),
        text,
        amount:+amount,
    }
         addTransaction(value);
         setAmount(0);
         setText("");
    }
  return (
    <div className='containter' >
        <h4 className={styles.heading}>ADD TRANSACTION</h4>
       
        
        <hr />
         <div className={styles.box}>
        <div className={styles.input}>
            <div><h5>Test</h5></div>
            <div ><input type="text" value={text} onChange={(e)=>setText(e.target.value)} placeholder='Enter Text...'/></div>
           
        </div>
        <div className={styles.input}>
            <div><h5>Amount(negative -expense,postive-income)</h5></div>
            <div><input type="number" value={amount}  onChange={(e)=>setAmount(e.target.value)} placeholder='Enter Amount...'/></div>
        </div>
        <button type='button'  onClick={submit} className={styles.button}>Add transaction</button>
      </div>
    </div>
  )
}

export default AddNewTransaction
