import { PropsWithChildren, MouseEvent } from "react";

export type AccordionProps = { 
    title: string;
    onClick?: (event: MouseEvent<HTMLDivElement>) => void;
    isOpened: boolean;
    classNames?: {
        container?: string;
        titleContent?: string;
        wrappedContent?: string;
    }
} & PropsWithChildren;