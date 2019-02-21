import { combineReducers } from 'redux'
import todo_list from './TodoReducer'
import nav from './NavReducer'
//多个redeucer时，整合为一个rootReducer
export default combineReducers({
    nav,
    todo_list
})
