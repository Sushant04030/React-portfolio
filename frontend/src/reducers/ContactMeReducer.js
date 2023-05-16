import { 
    CONTACTME_REQUEST,
    CONTACTME_SUCCESS,
    CONTACTME_FAIL,
    CONTACTME_RESET
} from '../constants/ContactMeConstants'


export const contactMeReducer = (state = {}, action) => {
    switch (action.type) {
        case CONTACTME_REQUEST:
            return { loading: true }

        case CONTACTME_SUCCESS:
            return { loading: false, success: true, contactMe: action.payload }

        case CONTACTME_FAIL:
            return { loading: false, error: action.payload }

        case CONTACTME_RESET:
            return {}

        default:
            return state
    }
}
