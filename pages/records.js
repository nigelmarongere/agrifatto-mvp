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
    const [workers, setWorkers] = useState(['Alex', 'Gianluca', 'Nigel']);
    const listWorkers = workers.map((worker) =>
        <option key={worker} value={worker}>{worker}</option>
    );

    const [hours, setHours] = useState([4, 8, 16]);
    const listHours = hours.map((hour) =>
        <option key={hour} value={hour}>{hour}</option>
    );

    const [workerRecords, setWorkerRecords] = useState([{date_recorded: date, worker_name: 'Joe', hours_worked: 8, additional_info: 'Arrived 15 minutes late'}]);
    const listWorkerRecords = workerRecords.map((workerRecord) =>
        <li key={current.getTime()}>{`
            ${workerRecord.worker_name} worked 
            ${workerRecord.hours_worked} hours. 
            ${workerRecord.additional_info}
        .`}</li>
    );

    const [name, setName] = useState('');
    const [time, setTime] = useState(0);
    const [note, setNote] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        setWorkerRecords([
            ...workerRecords,
            {date_recorded: date, worker_name: name, hours_worked: time, additional_info: note}
        ]);
        console.log(workerRecords);
        setName('');
        setTime(0);
        setNote('');

    }

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
                <ul>
                    {listWorkerRecords}
                </ul>
                <form onSubmit={handleSubmit}>
                    <label>Name </label>
                    <select onChange={(event) => setName(event.target.value)}>
                        <option value="">--worker--</option>
                        {listWorkers}
                    </select>
                    <label> Hours </label>
                    <select onChange={(event) => setTime(event.target.value)}>
                        <option value="">--hours--</option>
                        {listHours}
                    </select>
                    <label>Notes</label>
                    <input type="text" placeholder="--note--" onChange={(event) => setNote(event.target.value)}></input>
                    <button type="submit">Add</button>
                </form>
            </div>
            <div>
                <h3>bookkeeping</h3>
            </div>
        </main>
    )
};