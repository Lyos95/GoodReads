  
import { combineReducers } from 'redux'
import booksStore from './BooksReducer'
import authorStore from './AuthorReducer'

export default combineReducers({
    booksStore,
    authorStore
})
