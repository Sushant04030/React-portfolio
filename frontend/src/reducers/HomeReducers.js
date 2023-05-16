import { 
    PERSONAL_INFO_REQUEST,
    PERSONAL_INFO_SUCCESS,
    PERSONAL_INFO_FAIL,

} from '../constants/HomeConstants'


export const personalInfoReducers = (state ={ personalInfo : [] }, action) => {
    switch(action.type){
        case PERSONAL_INFO_REQUEST:
            // console.log({products})
            return { loading : true, personalInfo : [] }

        case PERSONAL_INFO_SUCCESS:
            return { loading : false, personalInfo : action.payload }

        case PERSONAL_INFO_FAIL:
            return { loading : false, error: action.payload }

        default:
            return state
    }
}
