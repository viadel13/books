import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import reducerAddBooks from './reducers/reducerAddBooks'
import reducerFetchedBooks from './reducers/reducerFetchBooks'


const rootreducer = combineReducers({
    library : reducerAddBooks,
    search: reducerFetchedBooks
})



const store = createStore(rootreducer, applyMiddleware(thunk))

export default store