import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useDarkMode } from "../../contexts/DarkMode/DarkMode";

import s from './DarkModeToggle.module.css';

export const DarkModeToggle = () => {
    const {isDarkMode, setIsDarkMode} = useDarkMode();

    const printModeIcon = () => {
        return isDarkMode ? <MdDarkMode /> : <MdLightMode />;
    };

    const handleClick = () => {
        setIsDarkMode(!isDarkMode);
        console.log(isDarkMode);
    };

    return (
        <div className={s.iconWrapper} onClick={handleClick}>
            { printModeIcon() }
        </div>
    );
};