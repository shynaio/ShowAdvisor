import { Show } from '../../types/show';
import { Card } from '../Card/Card';
import s from './CardList.module.css';

export const CardList = ({data}: {data: Show[]}) => {
    return (
        <div className={s.cardList}>
            { data.map(show =>
                <Card data={show}></Card>
            ) }
        </div>
    );
};