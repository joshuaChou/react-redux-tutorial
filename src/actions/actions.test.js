/**
 * Created by joshua on 17年6月30日.
 */
import * as actions from './actions'
import configureMockStore from 'redux-mock-store'
import nock from 'nock'
import expect from 'expect' // You can use any testing library
import thunk from 'redux-thunk'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('actions', () => {
    test('should create an action to add a todo ', () => {
        const text ='finish docs'
        const expectedAction = {
            type:actions.ADD_TODO,
            text
        }
        expect(actions.addTodo(text)).toEqual(expectedAction)
    });

    test('create FETCH_REDDIT when fetching ',()=>{
        nock('`https://www.reddit.com/r/reactjs.json`')
            .get()
            .reply(200, { body: { todos: ['do something'] } })

        const expectedActions = [
            { type: actions.REQUEST_POSTS },
            { type: actions.RECEIVE_POSTS, body: { todos: ['do something'] } }
        ]
        const store = mockStore({ todos: [] })

        return store.dispatch(actions.fetchPostsIfNeeded('reactjs')).then(() => {
            // return of async actions
            expect(store.getActions()).toEqual(expectedActions)
        })
    })
})