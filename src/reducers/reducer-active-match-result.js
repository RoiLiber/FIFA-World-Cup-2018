export default function (state=null, action) {
    
    switch(action.type) {
        
        case "HOME_TEAM_RESULT_SELECTED":
            return action.payload;
            break;

        case "AWAY_TEAM_RESULT_SELECTED":
            return action.payload;
            break;
        default:
        console.log(state);
    }


    return state;
}