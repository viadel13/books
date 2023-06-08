import { FECT_BOOKS_ERROR, FECT_BOOKS_SUCCESS, FECT_BOOKS_LOADING} from "../reducers/constants";
import axios from 'axios'

const fetchBooksLoading = ()=>{
    return{
        type: FECT_BOOKS_LOADING
    }
}
const fetchBooksSuccess = data=>{
    return{
        type: FECT_BOOKS_SUCCESS,
        payload: data
    }
}

const fetchBookError = error=>{
    return{
        type: FECT_BOOKS_ERROR,
        payload: error
    }
}

export const fetchBooks = title =>{
    return dispatch =>{
        dispatch(fetchBooksLoading())
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${title}&maxResults=20`)
        .then(res=>{
           const bookItemArray = res.data.items
            dispatch(fetchBooksSuccess(bookItemArray))
        })
        .catch((err)=>{

            dispatch(fetchBookError(err.message))
        })
    }
}