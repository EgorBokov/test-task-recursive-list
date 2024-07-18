import type { AccordionProps } from "../types";
import cn from "classNames";
import { IconChevron } from "@/components/icons";

import style from "./Accordion.module.scss";

export const Accordion = ({ classNames, children, title, isOpened, onClick }: AccordionProps) => {
    return (
        <div className={cn(style.accordion, classNames?.container)} onClick={onClick}>
            <div className={cn(style.header, classNames?.titleContent)}>
                <span>{ title }</span>
                <IconChevron className={style.icon} />
            </div>
            <div className={cn({ [style.activeContent]: isOpened }, style.content, classNames?.wrappedContent)}>
                { children } 
            </div>
        </div>
    )
}