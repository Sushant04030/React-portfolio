import { 
    TEAMS_REQUEST,
    TEAMS_SUCCESS,
    TEAMS_FAIL,

    TEAMS_BG_REQUEST,
    TEAMS_BG_SUCCESS,
    TEAMS_BG_FAIL,
} from '../constants/HomeConstants'
import axios from 'axios'



export const getTeamsAction = () => async (dispatch) => {
    try {
        dispatch({ type: TEAMS_REQUEST})
        
        const { data } = await axios.get('/api/teams/')

        dispatch({ type: TEAMS_SUCCESS, payload: data})

    }catch(error){
        dispatch({ type: TEAMS_FAIL,
             payload: error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
                })
    }
}

export const getTeamsBgAction = () => async (dispatch) => {
    try {
        dispatch({ type: TEAMS_BG_REQUEST})
        
        const { data } = await axios.get('/api/teamsBgImage/')

        dispatch({ type: TEAMS_BG_SUCCESS, payload: data})

    }catch(error){
        dispatch({ type: TEAMS_BG_FAIL,
             payload: error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
                })
    }
}