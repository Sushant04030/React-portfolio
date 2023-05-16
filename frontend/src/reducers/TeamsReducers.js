import { 
    TEAMS_REQUEST,
    TEAMS_SUCCESS,
    TEAMS_FAIL,

    TEAMS_BG_REQUEST,
    TEAMS_BG_SUCCESS,
    TEAMS_BG_FAIL,
} from '../constants/HomeConstants'


export const teamsReducers = (state ={ teams : [] }, action) => {
    switch(action.type){
        case TEAMS_REQUEST:
            // console.log({products})
            return { loading : true, teams : [] }

        case TEAMS_SUCCESS:
            return { loading : false, teams : action.payload }

        case TEAMS_FAIL:
            return { loading : false, error: action.payload }

        default:
            return state
    }
}

export const teamsBgReducers = (state ={ teamsBg : [] }, action) => {
    switch(action.type){
        case TEAMS_BG_REQUEST:
            // console.log({products})
            return { loading : true, teamsBg : [] }

        case TEAMS_BG_SUCCESS:
            return { loading : false, teamsBg : action.payload }

        case TEAMS_BG_FAIL:
            return { loading : false, error: action.payload }

        default:
            return state
    }
}