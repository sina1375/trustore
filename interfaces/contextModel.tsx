import { CartView } from "./cartView";
import { CategoryView } from "./categoryView";

export interface ContextModel {
    categories: CategoryView[],
    cart: CartView[],
}