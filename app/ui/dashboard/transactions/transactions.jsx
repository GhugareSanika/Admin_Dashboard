import styles from './transactions.module.css'
import Image from 'next/image'
const Transactions = () =>{
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Latest Transactions</h2>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Status</td>
                        <td>Date</td>
                        <td>Amount</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className={styles.user}>
                            <Image 
                                src="/avatar.png" 
                                alt=""
                                width={40}
                                height={40}
                                className={styles.userImage}
                            />
                            Sanika Ghugare
                            </div>
                        </td>
                        <td>
                            <span className={`${styles.status} ${styles.pending}`}>
                                Pending
                            </span>
                        </td>
                        <td>14.02.2003</td>
                        <td>$6.7236</td>
                    </tr>
                    <tr>
                        <td>
                            <div className={styles.user}>
                            <Image 
                                src="/avatar.png" 
                                alt=""
                                width={40}
                                height={40}
                                className={styles.userImage}
                            />
                            Shruti Ghugare
                            </div>
                        </td>
                        <td>
                            <span className={`${styles.status} ${styles.done}`}>
                            Done
                            </span>
                        </td>
                        <td>14.02.2003</td>
                        <td>$6.7236</td>
                    </tr>
                    <tr>
                        <td>
                            <div className={styles.user}>
                            <Image 
                                src="/avatar.png" 
                                alt=""
                                width={40}
                                height={40}
                                className={styles.userImage}
                            />
                            Sayali Kurade
                            </div>
                        </td>
                        <td>
                            <span className={`${styles.status} ${styles.cancelled}`}>cancelled</span>
                        </td>
                        <td>14.02.2003</td>
                        <td>$6.7236</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Transactions