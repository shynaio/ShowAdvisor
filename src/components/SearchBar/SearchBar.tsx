import * as React from "react";
import { useRef } from "react";
import { IconType } from "react-icons";
import s from './SearchBar.module.css';

export const SearchBar = (
    {onSubmit, onChange, placeholder, icon}: {
        onSubmit: (() => void) | undefined,
        onChange: ((value: string) => void) | undefined
        placeholder: string,
        icon: IconType
    }
) => {
    const textInput = useRef<HTMLInputElement>(null);

    const changeFunction = () => {
        onChange?.(textInput.current?.value!);
    };

    const submit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSubmit?.();
    };

    return (
        <div className={s.searchbarWrapper}>
            <form className={s.formWrapper} onSubmit={submit}>
                <span className={s.iconContainer}>{ icon && React.createElement(icon) }</span>
                <input className={s.input} ref={textInput} type='text' placeholder={placeholder} onChange={changeFunction} />
            </form>
        </div>
    );
};