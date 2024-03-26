import { FaStar, FaRegStar } from "react-icons/fa";
import s from './Stars.module.css';

export const Stars = ({max, rating, voteCount}: {max: number, rating: number, voteCount: number}) => {
    const ceil = 5;
    const factor = max / ceil;
    let current = rating / factor;

    return (
        <div className={s.starsWrapper}>
            {
                Array.from({length: ceil}).map((_, n) => {
                    let val = (current - n >= 0) ? current - n : 0;
                    val = Math.round(val * 100) / 100;

                    let width = (val > 0) ? ((val > 1) ? 1 : val) : 0;

                    return (
                        <div className={s.star}>
                            <div className={s.starFront} style={{maxWidth: `${width}em`}}><FaStar/></div>
                            <div className={s.starBack}><FaRegStar/></div>
                        </div>
                    )
                })
            }
            <div className={s.rating}>{Math.round(rating/factor * 100) / 100}/{ceil} out of {voteCount} votes</div>
        </div>
    );
}