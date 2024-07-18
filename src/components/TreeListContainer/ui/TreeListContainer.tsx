import type { TreeListContainerProps } from "../types";
import { ListElement } from "@/components/ListElement";

import style from "./TreeListContainer.module.scss";

export const TreeListContainer = ({ list }: TreeListContainerProps) => { 
    return (
        <div className={style.container}>
            {Boolean(list.length) && ( 
                list.map((element) => <ListElement element={element} />)
            )}
        </div>
    )
}