import { 
    PROJECTS_REQUEST,
    PROJECTS_SUCCESS,
    PROJECTS_FAIL,
    
    
    PROJECT_BY_ID_REQUEST,
    PROJECT_BY_ID_SUCCESS,
    PROJECT_BY_ID_FAIL,
} from '../constants/ProjectConstants'


export const projectsReducers = (state ={ projects : [] }, action) => {
    switch(action.type){
        case PROJECTS_REQUEST:
            // console.log({products})
            return { loading : true, projects : [] }

        case PROJECTS_SUCCESS:
            return { loading : false, projects : action.payload }

        case PROJECTS_FAIL:
            return { loading : false, error: action.payload }

        default:
            return state
    }
}

export const projectDetailReducers = (state ={ project : [] }, action) => {
    switch(action.type){
        case PROJECT_BY_ID_REQUEST:
            // console.log({products})
            return { loading : true, project : [] }

        case PROJECT_BY_ID_SUCCESS:
            return { loading : false, project : action.payload }

        case PROJECT_BY_ID_FAIL:
            return { loading : false, error: action.payload }

        default:
            return state
    }
}