//리듀서 합치기
import { combineReducers } from 'redux';
import colorA from './modules/color'; 
import count from './modules/count'
import changeColor from './modules/changecolor'
import todos from './modules/todos'

export default combineReducers({
    colorA : colorA,
    counter : count,
    changeColor,
    todoReducer : todos
})

