import { FECT_BOOKS_ERROR, FECT_BOOKS_SUCCESS, FECT_BOOKS_LOADING} from "../reducers/constants";

const initialState = {
    isLoading: false,
    fetchedBooks: [],
    error: ''
}

const reducerFetchedBooks = (state = initialState, action)=>{
    switch (action.type) {
        case FECT_BOOKS_LOADING:
            return{
                ...state,
                isLoading: true
            }
        case FECT_BOOKS_SUCCESS:
            return{
                ...state,
                isLoading: false,
                fetchedBooks: action.payload,
                error: ''
            }
        case FECT_BOOKS_ERROR:
            return{
                ...state,
                isLoading: false,
                fetchedBooks: [],
                error: action.payload
            }
            

        default: return state
       
    }
}

export default reducerFetchedBooks