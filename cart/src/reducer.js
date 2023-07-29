export default function reducer(state, action) {
    switch(action.type) {
        case "LOADING":
            return { ...state, loading: true };
            break;
        case "":
            break;
        default:
            return state;
    }    
}