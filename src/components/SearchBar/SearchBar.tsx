import { useRef } from "react";
import s from './SearchBar.module.css';

export const SearchBar = (
    {onSubmit, onChange, placeholder, icon}: {
        onSubmit: (() => void) | undefined,
        onChange: ((value: string) => void) | undefined
        placeholder: string,
        icon: string | undefined
    }
) => {
    const textInput = useRef<HTMLInputElement>(null);

    const changeFunction = () => {
        onChange?.(textInput.current?.value!);
    };

    return (
        <div>
            <div className={s.searchbarWrapper}>
                {
                    icon && (
                        <img src={icon}/>
                    )
                }
                <input ref={textInput} type='text' placeholder={placeholder} onChange={changeFunction}></input>
            </div>
            <button onClick={onSubmit}>Go!</button>
        </div>
    )
};