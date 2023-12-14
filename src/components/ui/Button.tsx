import React, {useLayoutEffect, useState} from 'react';

type ButtonProps = {
    onClick?: () => void
    children?: React.ReactNode
    type?: "filled" | "gradient" | "outlined" | "text"
    className?: string
    typeHtml?: string
    name?: string
}
const Button: React.FC<ButtonProps> = ({onClick, children, type, className,typeHtml, name}) => {
    const filled = "select-none rounded-lg bg-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none";
    const gradient = "select-none rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none";
    const outlined = "select-none rounded-lg border border-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none";
    const text = "px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none";
    const [tailwindCssStyle,setTailwindCssStyle] = useState<string>(filled)
    useLayoutEffect(()=>{
        switch (type) {
            case "filled":
                setTailwindCssStyle(filled);
                break
            case "gradient":
                setTailwindCssStyle(gradient);
                break
            case "outlined":
                setTailwindCssStyle(outlined);
                break
            case "text":
                setTailwindCssStyle(text);
                break
        }
    },[])
    return (
        <input
            onClick={onClick}
            className={className + " " + tailwindCssStyle}
            type={typeHtml || "button"}
            style={{cursor: 'pointer'}}
            value={children?.toString() || "Кнопка"}
            name={name}
        />
    );
};
export default Button;