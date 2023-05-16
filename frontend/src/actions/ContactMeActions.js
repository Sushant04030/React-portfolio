import { 
    CONTACTME_REQUEST,
    CONTACTME_SUCCESS,
    CONTACTME_FAIL,
    CONTACTME_RESET
} from '../constants/ContactMeConstants'
import axios from 'axios'

export const contactMeAction = (contact) => async (dispatch, getState) => {
    try {
        dispatch({
            type: CONTACTME_REQUEST
        })

        const { data } = await axios.post(
            `/api/contactMe/`,
            contact
        )
        dispatch({
            type: CONTACTME_SUCCESS,
            payload: data,
        })


    } catch (error) {
        dispatch({
            type: CONTACTME_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}