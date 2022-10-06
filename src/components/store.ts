import { createContext, useContext } from "react";

const initialState = {
    first: "Brigita",
    last: "Sabutyte"
}

export type UserState = typeof initialState;

const context = createContext<typeof initialState>(initialState);

export default context;