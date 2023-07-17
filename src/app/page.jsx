import Image from 'next/image'
import styles from './page.module.css'
import History from '@/Component/History/History'
import Header from '@/Component/Header/Header'
import Balance from '@/Component/Balance/Balance'
import AddNewTransaction from '@/Component/AddNewTransaction/AddNewTransaction'
import { GlobalProvider } from '@/context/GlobalState'
export default function Home() {
  return (

    <div className={styles.container}>
      <GlobalProvider>
      <Header/>
      <div className={styles.mainContainer}>
        <Balance/>
        <History/>
        <AddNewTransaction/>
        
      </div>
      </GlobalProvider>
    </div>
  )
}
