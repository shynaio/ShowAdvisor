import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MovieAPI } from '../../api/movie-api';
import { ROUTES } from '../../routes/routes';
import { Show } from '../../types/show';
import s from './Card.module.css';

export const Card = ({data}: {data: Show}) => {
    const [show, setShow] = useState<Show>();

    useEffect(() => {
        setShow(data);
    }, [data]);

    // const getPicture = () => {
    //     return `${}`
    // }

    const renderCard = () => {
        if (!show) return (
            <div className={s.card}>No card content!</div>
        );

        return (
            <div className={s.card}>
                <Link to={`${ROUTES.showDetail}/${show.id}`} className={s.cardLink}>
                    <div className={s.cardPicture}>
                        <img src={`https://image.tmdb.org/t/p/original/${show.backdrop_path}`}></img>
                    </div>
                    <div className={s.cardContent}>
                        { show?.name }
                    </div>
                </Link>
            </div>
        );
    }

    return (
        <>
            { renderCard() }
        </>
    );
}