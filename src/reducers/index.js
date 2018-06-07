import { combineReducers } from 'redux';
import stadiumsReducer from './reduser-stadiums';
import teamsReducer from './reduser-teams';
import groupsReducer from './reduser-groups';
import knockoutReducer from './reduser-knockout';

const allReducers = combineReducers({
    stadiums: stadiumsReducer,
    teams: teamsReducer,
    groups: groupsReducer,
    knockout: knockoutReducer
});

export default allReducers;