export default function (state={}, action) {
    switch(action.type) {
        case "MATCH_SELECTED":
            return action.payload;
            break;
    }
    return state;
}