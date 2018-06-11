export const chengeHomeTeamResult = (match) => {
    console.log("you chenged on home result:", match.name);
    return {
        type: "HOME_TEAM_RESULT_SELECTED",
        payload: match.name
    }
};

export const chengeAwayTeamResult = (match) => {
    console.log("you chenged on away result:", match.name);
    return {
        type: "AWAY_TEAM_RESULT_SELECTED",
        payload: match.name
    }
};