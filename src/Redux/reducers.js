import { initialState } from "./initialState";
export const reducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            localStorage.setItem('isLoggedIn', true);
            localStorage.setItem('action', "login")
            return { ...initialState, isLoggedIn: localStorage.getItem("isLoggedIn"), action: localStorage.getItem("action") };

        case "LOGOUT":
            localStorage.clear();
            return { ...initialState, isLoggedIn: localStorage.getItem("isLoggedIn") };

        case "CHANGE_LANGUAGE":
            let language = action.payload;
            return {
                ...initialState, isLoggedIn: localStorage.getItem("isLoggedIn"), action: localStorage.getItem("action"),
                currentLanguage: language,
                screenType: state.screenType
            };

        case "CHANGE_SCREEN_TYPE":
            let screenType = action.payload;
            return {
                ...initialState, isLoggedIn: localStorage.getItem("isLoggedIn"), action: localStorage.getItem("action"),
                screenType: screenType,
                currentLanguage: state.currentLanguage
            }

        case "CHANGE_SELECTED_MENU":
            let selected_menu = action.payload;
            return { ...initialState, isLoggedIn: localStorage.getItem("isLoggedIn"), MenuSelected: selected_menu }

        case "JOB_DESCRIPTION":
            let job_id = action.payload;
            return { ...initialState, isLoggedIn: localStorage.getItem("isLoggedIn"), activeJob: job_id }

        case "LOGIN_REGISTRATION":

            localStorage.setItem('isLoggedIn', true);
            localStorage.setItem('user', JSON.stringify(action.payload));
            localStorage.setItem('action', "registration");

            return { ...initialState, isLoggedIn: localStorage.getItem("isLoggedIn"), user: JSON.parse(localStorage.getItem("user")), action: "registration" };

        default:
            return state;
    }
}