import styles from '../styles/Records.module.css'
import { useState } from "react";

export default function Records() {

    // date
    const current = new Date();

    let month = current.getMonth() + 1;
    month < 10? month = `0${month}`: month;

    let day = current.getDate();
    day < 10? day = `0${day}`: day;

    const today = `${current.getFullYear()}-${month}-${day}`;

    const [date, setDate] = useState(today);

    // workers

    // bookkeeping
    

    return (
        <main className={styles.main}>
            <div>
                <h3>Date</h3>
                <input 
                    type="date"
                    value={date} 
                    onChange={(event) => setDate(event.target.value)}
                />
            </div>
            <div>
                <h3>Workers</h3>
            </div>
            <div>
                <h3>bookkeeping</h3>
            </div>
        </main>
    )
};