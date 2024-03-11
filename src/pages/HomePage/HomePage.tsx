import { useEffect, useState } from 'react';
import { MovieAPI } from '../../api/movie-api';
import { CardList } from '../../components/CardList/CardList';
import { Show } from '../../types/show';
import s from './HomePage.module.css';

export const HomePage = () => {
    const [shows, setShows] = useState<Show[]>([]);

    useEffect(() => {
        loadPopularShows();
    }, []);

    const loadPopularShows = async () => {
        const shows = (await MovieAPI.fetchPopularShows()) as Show[];
        setShows(shows);
    }

    return (
        <div className={s.homeWrapper}>
            Hello world!
            <CardList data={shows}></CardList>
        </div>
    );
}