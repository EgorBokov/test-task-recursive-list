import { useState, MouseEvent } from "react";

import type { ListElementProps } from "../types";
import { Accordion } from "@/components/Accordion";

import style from "./ListElement.module.scss";
import cn from "classNames";

export const ListElement = ({ element }: ListElementProps) => {
    const [showChildren, setShowChildren] = useState(false);
    const hasChildren = element.children && element.children?.length > 0;
    
    const handleToggleChildrenVisibility = (event: MouseEvent<HTMLDivElement>) => {
        event.stopPropagation();
        setShowChildren((prev) => !prev);
    };

    return (
        <div className={style.container} onClick={handleToggleChildrenVisibility}>
            {!hasChildren && (
                <div className={style.content}>
                    <span>{element.name}</span>
                </div>
            )}
            {hasChildren && (
                <div className={style.accordion} onClick={handleToggleChildrenVisibility}>
                    <Accordion
                        classNames={{
                            titleContent: cn(style.content, style.activeContent),
                            wrappedContent: style.wrappedChildren
                        }}
                        title={element.name} 
                        isOpened={showChildren}
                        onClick={handleToggleChildrenVisibility}
                    >
                        {element.children?.map((item) => <ListElement element={item} key={item.name} />)}
                    </Accordion>
                
                </div>
            )}
        </div>
    )
}