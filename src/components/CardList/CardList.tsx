import { Show } from '../../types/show';
import { Card } from '../Card/Card';
import s from './CardList.module.css';

export const CardList = ({data, horizontal, oneLine, filter}: {
    data: Show[],
    horizontal: boolean,
    oneLine: boolean,
    filter: string
}) => {
    return (
        <div className={s.cardList + ' ' + ((horizontal) ? s.horizontal : s.vertical) + ' ' + ((oneLine) ? s.oneLine : '')}>
            { data.filter( show => show.name.toLowerCase().includes(filter) ).map(show => <Card horizontal={horizontal} data={show}></Card>) }
        </div>
    );
};