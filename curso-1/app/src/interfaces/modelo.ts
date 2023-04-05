import { imprimivel } from "../utils/imprimivel";
import { Comparavel } from "./comparavel";

export interface Modelo<T> extends imprimivel, Comparavel<T> {

}