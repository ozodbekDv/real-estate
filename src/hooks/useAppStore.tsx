// hooks.ts
import { useSelector, TypedUseSelectorHook } from "react-redux";
import { RootState } from "../app/store"; // Assuming your RootState is defined in store.ts

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
