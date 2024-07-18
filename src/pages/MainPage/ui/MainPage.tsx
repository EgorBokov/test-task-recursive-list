import { useAppSelector } from "@/utils/hooks";
import { treeListSelector } from "@/store/treeSlice/selectors.ts";

import { TreeListContainer } from "@/components/TreeListContainer";

export const MainPage = () => {
    const treeList = useAppSelector(treeListSelector);
    return (
        <div>
            <TreeListContainer list={treeList} />
        </div>
    )
}