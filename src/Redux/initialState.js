//Creating the Redux Store State
export const initialState = {
    isLoggedIn: localStorage.getItem("isLoggedIn") == null ? false : localStorage.getItem("isLoggedIn"),
    categoryActive: {
        "id": 1,
        "title": "Mobile Applications"
    },
    showProfile: false,

    MenuSelected: (window.location.pathname !== null) ? window.location.pathname.split('/')?.slice(-1)?.toString()?.replaceAll("-", "_") :
        (window.location.pathname === "/employer-login") ? "employer_dashboard" : "candidate_dashboard",
    activeJob: '',
    candidateInfo: '',
    CandidateRegistration: false,
    userDetail: {},
    action: localStorage.getItem("action") == null ? " " : localStorage.getItem("action"),
    currentLanguage: "en"
};