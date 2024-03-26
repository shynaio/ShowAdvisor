import { useEffect, useState } from "react";
import s from './Clock.module.css';

export const Clock = () => {
    const [date, setDate] = useState<Date>(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    const printCurrentTime = () => {
        return date.toLocaleTimeString(['fr']);
    }

    return (
        <div className={s.clock}>
            { printCurrentTime() }
        </div>
    );
};