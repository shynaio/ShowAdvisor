import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/routes';
import { Show } from '../../types/show';
import s from './Card.module.css';

export const Card = ({data, horizontal}: {data: Show, horizontal: boolean}) => {
    const [show, setShow] = useState<Show>();

    useEffect(() => {
        setShow(data);
    }, [data]);

    const getBackgroundPicture = (show: Show) => {
        if (!show.backdrop_path && !show.poster_path) return '/public/img/placeholder.jpg';
        return (horizontal) ? `https://image.tmdb.org/t/p/original/${show.backdrop_path}`
            : `https://image.tmdb.org/t/p/original/${show.poster_path}`;
    }

    const renderCard = () => {
        if (!show) return (
            <div className={s.card}>No card content!</div>
        );

        return (
            <div className={s.card}>
                <Link to={`/${ROUTES.showDetail}/${show.id}`} className={s.cardLink}>
                    <div className={s.cardPicture}>
                        <img src={getBackgroundPicture(show)} draggable="false"></img>
                    </div>
                    <div className={s.cardContent}>
                        <div className={s.cardText}>
                            { show?.name }
                        </div>
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