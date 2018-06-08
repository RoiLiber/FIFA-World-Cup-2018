import { combineReducers } from 'redux';

//reducers
import stadiumsReducer from './reduser-stadiums';
import teamsReducer from './reduser-teams';
import groupsReducer from './reduser-groups';
import knockoutReducer from './reduser-knockout';

//reducers-action
import activeMatchReducer from './reducer-active-match';

const allReducers = combineReducers({
    stadiums: stadiumsReducer,
    teams: teamsReducer,
    groups: groupsReducer,
    knockout: knockoutReducer,
    activeMatch: activeMatchReducer
});

export default allReducers;