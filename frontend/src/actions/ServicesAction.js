import { 
    SERVICES_REQUEST,
    SERVICES_SUCCESS,
    SERVICES_FAIL,

    SERVICES_BG_REQUEST,
    SERVICES_BG_SUCCESS,
    SERVICES_BG_FAIL,
} from '../constants/HomeConstants'
import axios from 'axios'


export const getServicesAction = () => async (dispatch) => {
    try {
        dispatch({ type: SERVICES_REQUEST})
        
        const { data } = await axios.get('/api/services/')

        dispatch({ type: SERVICES_SUCCESS, payload: data})

    }catch(error){
        dispatch({ type: SERVICES_FAIL,
             payload: error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
                })
    }
}

export const getServicesBgAction = () => async (dispatch) => {
    try {
        dispatch({ type: SERVICES_BG_REQUEST})
        
        const { data } = await axios.get('/api/serviceBgImage/')

        dispatch({ type: SERVICES_BG_SUCCESS, payload: data})

    }catch(error){
        dispatch({ type: SERVICES_BG_FAIL,
             payload: error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
                })
    }
}