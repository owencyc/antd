import { combineReducers } from 'redux'
import todo_list from './TodoReducer'
//多个redeucer时，整合为一个rootReducer
export default combineReducers({
    todo_list
})
