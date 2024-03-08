// sessionSlice
export { login, logout, sessionReducer } from "./Session/sessionSlice";

// categorySlice
export { filmReducer, setCategories } from "./Film/filmSlice";

// store
export { store } from "./Init/init";
// store - rootstate - appdispatch
export type { RootState, AppDispatch } from "./Init/init";
