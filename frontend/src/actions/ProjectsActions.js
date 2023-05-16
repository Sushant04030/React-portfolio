import { 
    PROJECTS_REQUEST,
    PROJECTS_SUCCESS,
    PROJECTS_FAIL,
    
    
    PROJECT_BY_ID_REQUEST,
    PROJECT_BY_ID_SUCCESS,
    PROJECT_BY_ID_FAIL, 
} from '../constants/ProjectConstants'
import axios from 'axios'

export const getProjectsAction = () => async (dispatch) => {
    try {
        dispatch({ type: PROJECTS_REQUEST})
        
        const { data } = await axios.get('/api/projects/')

        dispatch({ type: PROJECTS_SUCCESS, payload: data})

    }catch(error){
        dispatch({ type: PROJECTS_FAIL,
             payload: error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
                })
    }
}


export const getProjectByIdAction = (id) => async (dispatch) => {
    try {
        dispatch({ type: PROJECT_BY_ID_REQUEST})

        const { data } = await axios.get(`/api/projects/${id}`)

        dispatch({ type: PROJECT_BY_ID_SUCCESS, payload: data})

    }catch(error){
        dispatch({ type: PROJECT_BY_ID_FAIL,
             payload: error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
                })
    }
}