 import type {HTMLAttributes} from "react";
 export type CardVariant=
 | "default"
 | "interactive"
 | "highlight"
 | "flat";

 export interface CardProps extends HTMLAttributes<HTMLDivElement> {
    variant?: CardVariant;
 }
 export type CardHeaderProps = HTMLAttributes<HTMLDivElement>;
 export type CardContentProps = HTMLAttributes<HTMLDivElement>;
 export type CardFooterProps = HTMLAttributes<HTMLDivElement>;