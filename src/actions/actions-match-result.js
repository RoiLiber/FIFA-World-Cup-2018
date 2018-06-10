export const chengHomeTeamResult = (match) => {
    console.log("you chenged on home result:", match.name);
    return {
        type: "HOME_TEAM_RESULT_SELECTED",
        payload: match.name
    }
};

export const chengAwayTeamResult = (match) => {
    console.log("you chenged on away result:", match.name);
    return {
        type: "AWAY_TEAM_RESULT_SELECTED",
        payload: match.name
    }
};