// sessionSlice
export { login, logout, sessionReducer } from "./Session/sessionSlice";

// filmSlice
export { filmReducer, setCategories, setMovies } from "./Film/filmSlice";

// store
export { store } from "./Init/init";
// store - rootstate - appdispatch
export type { RootState, AppDispatch } from "./Init/init";
