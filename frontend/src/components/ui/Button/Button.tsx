import {twMerge} from "tailwind-merge";
import type {ButtonProps} from "./Button.types";

const Button=({
    variant="primary",
    size="md",
    className,
    children,
    ...props
}:ButtonProps)=>{
    const baseStyles=
    "inline-flex items-center justify-center font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50";
    const variantStyles={
        primary:"bg-indigo-600 text-white hover:bg-indigo-700",
        secondary:"bg-transparent text-white hover:bg-slate-700",
        outline:
        "border border-slate-300 bg-transparent text-slate-700 hover:bg-slate-100",
        ghost:"bg-transparent text-slate-700 hover:bg-slate-700",
        danger:"bg-red-600 text-white hover:bg-red-700",
    };
    const sizeStyles={
        sm:"h-9 px-3 text-sm rounded-lg",
        md:"h-10 px-4 text-sm rounded-xl",
        lg:"h-12 px-6 text-base rounded-xl",
    };
    return(
        <button
        className={twMerge(
            baseStyles,
            variantStyles[variant],
            sizeStyles[size],
            className
        )}
        {...props}
    >
        {children}
    </button>
);
};
export default Button;