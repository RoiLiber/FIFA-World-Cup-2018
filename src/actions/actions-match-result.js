export const chengeHomeTeamResult = (homeTeamScore) => {
    console.log("you chenged on home result:", homeTeamScore);
    return {
        type: "HOME_TEAM_RESULT_SELECTED",
        payload: homeTeamScore
    }
};

export const chengeAwayTeamResult = (awayTeamScore) => {
    console.log("you chenged on away result:", awayTeamScore);
    return {
        type: "AWAY_TEAM_RESULT_SELECTED",
        payload: awayTeamScore
    }
};