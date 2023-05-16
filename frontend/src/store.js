import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { personalInfoReducers } from './reducers/HomeReducers'
import { projectsReducers, projectDetailReducers } from './reducers/ProjectsReducers'
import { contactMeReducer } from './reducers/ContactMeReducer'
import { servicesBgReducers } from './reducers/ServiceReducer'
import { teamsReducers } from './reducers/TeamsReducers'
import { teamsBgReducers } from './reducers/TeamsReducers'

 
const reducer = combineReducers({
    personalInfoR : personalInfoReducers,
    projectsR : projectsReducers,
    projectDetailR : projectDetailReducers,
    contactMeR : contactMeReducer,
    teamsR : teamsReducers,
    teamsBgR : teamsBgReducers,
    servicesBgR : servicesBgReducers,
})

const initialState = {
}

const middleware = [thunk]

const store = createStore(reducer, initialState,
    composeWithDevTools(applyMiddleware(...middleware)))

export default store