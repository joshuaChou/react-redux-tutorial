/**
 * Created by joshua on 17年6月27日.
 */
import { combineReducers } from 'redux'
import actions from '../actions'
import { routerReducer} from 'react-router-redux'
const { SHOW_ALL } = actions.VisibilityFilters


function visibilityFilter(state = SHOW_ALL, action) {
    switch (action.type) {
        case actions.SET_VISIBILITY_FILTER:
            return action.filter
        default:
            return state
    }
}

function todos(state = [], action) {
    switch (action.type) {
        case actions.ADD_TODO:
            return [
                ...state,
                {
                    text: action.text,
                    completed: false
                }
            ]
        case actions.COMPLETE_TODO:
            return [
                ...state.slice(0, action.index),
                Object.assign({}, state[action.index], {
                    completed: true
                }),
                ...state.slice(action.index + 1)
            ]
        default:
            return state
    }
}

function selectedSubreddit(state = 'reactjs', action) {
    switch (action.type) {
        case actions.SELECT_SUBREDDIT:
            return action.subreddit
        default:
            return state
    }
}

function posts(state = {
    isFetching: false,
    didInvalidate: false,
    items: []
}, action) {
    switch (action.type) {
        case actions.INVALIDATE_SUBREDDIT:
            return Object.assign({}, state, {
                didInvalidate: true
            })
        case actions.REQUEST_POSTS:
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false
            })
        case actions.RECEIVE_POSTS:
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                items: action.posts,
                lastUpdated: action.receivedAt
            })
        default:
            return state
    }
}

function postsBySubreddit(state = { }, action) {
    switch (action.type) {
        case actions.INVALIDATE_SUBREDDIT:
        case actions.RECEIVE_POSTS:
        case actions.REQUEST_POSTS:
            return Object.assign({}, state, {
                [action.subreddit]: posts(state[action.subreddit], action)
            })
        default:
            return state
    }
}

// const todoApp = combineReducers({
//     visibilityFilter,
//     todos
// })

const rootReducer = combineReducers({
    visibilityFilter,
    todos,
    postsBySubreddit,
    selectedSubreddit,
    router: routerReducer
})

export default rootReducer