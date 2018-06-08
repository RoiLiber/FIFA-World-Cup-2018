export const selectHomeTeamScore = (match) => {
    console.log("you clicked on match:", match.name);
    return {
        type: "MATCH_SELECTED",
        payload: match
    }
};