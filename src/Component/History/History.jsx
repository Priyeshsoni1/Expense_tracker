"use client"
import React, { useState,useContext} from 'react'
import styles from "./History.module.css"
import classNames from 'classnames';
import { GlobalContext } from '../../context/GlobalState';
const History = () => {
    const[number,setNumber]=useState(-350000000);
    const numberStyle =number >= 0 ? 'green' : 'red';

    // const combinedClassNames = classNames(
    //     styles.listBox,
    //      numberStyle,
       
    //   );
    const {transactions}=useContext(GlobalContext);
    console.log(transactions)
    
    
    
    const {deleteTransaction} =useContext(GlobalContext);  
      console.log(deleteTransaction);

  return (
    <div className={styles.container}>
        <div className={styles.heading}>
                History
        </div>
  
      <div>
        <hr />
        <div>
            {
                transactions.map((item)=>
                {return(
                    <div key={item.id}  className={styles.boxes} style={{display:"flex",alignItems:"center"}}>
                            <div onClick={()=>deleteTransaction(item.id)} className={styles.delete}>❌</div>
                            <div  style={{"border-right":`6px solid ${item.amount>0?"green":"red"}`}} className={`${styles.listBox} `}>
                                
                            <div>{item.text}</div>
                            <div >{item.amount>0?`+${item.amount}`:`${item.amount}`}</div>
            </div>
            </div>)
                })
            }


        </div>
      </div>
    </div>
  )
}

export default History
