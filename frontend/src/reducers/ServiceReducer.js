import { 
    SERVICES_REQUEST,
    SERVICES_SUCCESS,
    SERVICES_FAIL,

    SERVICES_BG_REQUEST,
    SERVICES_BG_SUCCESS,
    SERVICES_BG_FAIL,
} from '../constants/HomeConstants'


export const servicesReducers = (state ={ services : [] }, action) => {
    switch(action.type){
        case SERVICES_REQUEST:
            // console.log({products})
            return { loading : true, services : [] }

        case SERVICES_SUCCESS:
            return { loading : false, services : action.payload }

        case SERVICES_FAIL:
            return { loading : false, error: action.payload }

        default:
            return state
    }
}

export const servicesBgReducers = (state ={ servicesBg : [] }, action) => {
    switch(action.type){
        case SERVICES_BG_REQUEST:
            // console.log({products})
            return { loading : true, servicesBg : [] }

        case SERVICES_BG_SUCCESS:
            return { loading : false, servicesBg : action.payload }

        case SERVICES_BG_FAIL:
            return { loading : false, error: action.payload }

        default:
            return state
    }
}