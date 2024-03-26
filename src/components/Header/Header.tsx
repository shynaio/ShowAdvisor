import { Link, useLocation } from 'react-router-dom';
import { ROUTES } from '../../routes/routes';
import { SearchBar } from '../SearchBar/SearchBar';
import s from './Header.module.css';

import { FaEarlybirds } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaFilter } from "react-icons/fa6";
import { Clock } from '../Clock/Clock';
import { DarkModeToggle } from '../DarkModeToggle/DarkModeToggle';

export const Header = (
    {showSearchBar, onSearchAction, onChangeAction, onFilterAction}: {
        showSearchBar: boolean | undefined
        onSearchAction: (() => void) | undefined
        onChangeAction: ((value: string) => void) | undefined
        onFilterAction: ((value: string) => void) | undefined
    }
) => {
    const {pathname} = useLocation();

    return (
        <header className={s.header}>
            <Link to={ROUTES.index}>
                <div className={s.logo}>
                    <FaEarlybirds />
                    <span>Show Advisor</span>
                </div>
            </Link>
            { showSearchBar && (
                <div className={s.right}>
                    <SearchBar onSubmit={onSearchAction} onChange={onChangeAction} placeholder='Search a TV show you may like' icon={FaMagnifyingGlass}></SearchBar>
                    <SearchBar onSubmit={undefined} onChange={onFilterAction} placeholder='Filter the results' icon={FaFilter}/>
                </div>
            ) }
            { pathname === ROUTES.index && <Clock/> }
            <DarkModeToggle />
        </header>
    )
};