import { useEffect, useState } from 'react';
import { MovieAPI } from '../../api/movie-api';
import { CardList } from '../../components/CardList/CardList';
import { Header } from '../../components/Header/Header';
import { Show } from '../../types/show';
import s from './HomePage.module.css';

export const HomePage = () => {
    const [shows, setShows] = useState<Show[]>([]);
    const [searchString, setSearchString] = useState<string>('');
    const [filterString, setFilterString] = useState<string>('');

    useEffect(() => {
        loadPopularShows();
    }, []);

    const loadPopularShows = async () => {
        const shows = (await MovieAPI.fetchPopularShows()) as Show[];
        setShows(shows);
    }

    const loadShowsByTitle = async () => {
        const showsByTitle = (await MovieAPI.fetchShowByTitle(searchString));
        setShows(showsByTitle);
    }

    const updateShows = () => {
        if (searchString.length < 1) {
            setShows([]); // Virer quand loader
            loadPopularShows();
            return;
        }

        setShows([]);
        loadShowsByTitle();
    }

    const updateQuery = (value: string) => {
        setSearchString(value.toLowerCase());
    }

    const updateFilter = (value: string) => {
        setFilterString(value.toLowerCase());
    }

    return (
        <div className={s.homeWrapper}>
            <Header onSearchAction={updateShows} onChangeAction={updateQuery} onFilterAction={updateFilter} showSearchBar={true}></Header>
            <CardList data={shows} horizontal={false} oneLine={false} filter={filterString}></CardList>
        </div>
    );
}