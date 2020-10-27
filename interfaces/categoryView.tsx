import { CategoryKindView } from "./categoryKindView";

export interface CategoryView {
    id: number,
    name: string,
    faName: string,
    categoryKinds: CategoryKindView[],
}