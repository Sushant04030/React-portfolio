import { 
    PERSONAL_INFO_REQUEST,
    PERSONAL_INFO_SUCCESS,
    PERSONAL_INFO_FAIL,

} from '../constants/HomeConstants'

import axios from 'axios'

export const getPersonalInfoAction = () => async (dispatch) => {
    try {
        dispatch({ type: PERSONAL_INFO_REQUEST})
         
        const { data } = await axios.get('/api/personalInfo/')

        dispatch({ type: PERSONAL_INFO_SUCCESS, payload: data})

    }catch(error){
        dispatch({ type: PERSONAL_INFO_FAIL,
             payload: error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
                })
    }
}