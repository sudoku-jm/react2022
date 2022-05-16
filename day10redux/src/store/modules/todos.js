//1.액션생성
const ADD = 'todos/ADD'
const DEL = 'todos/DEL'
const CHANGE_TEXT = 'todos/CHANGE_TEXT'

//2.내보내기
export const add = (text) => ({
    type : ADD,
    text : text
})
export const del = (id) => ({
    type : DEL,
    id : id
})
export const changeText = (text) => ({
    type : CHANGE_TEXT,
    text : text,
})

//3.초기선언
let no = 5
const initalState = {
    text : '',
    todos : [
        {id : 1, text:'응애1'},
        {id : 2, text:'응애2'},
        {id : 3, text:'응애3'},
        {id : 4, text:'응애4'},
    ],
}

const reducer = (state = initalState, action) => {
    switch(action.type){
        case ADD : 
            return{
                ...state,
                todos : [...state.todos,{
                    id : no++,
                    text : action.text
                }]
                // todos : state.todos.concat({
                //     id : no++,
                //     text : action.text
                // })
            }
        case DEL : 
            return{
                ...state,
                todos : state.todos.filter(todo => todo.id !== action.id )
            }
        case CHANGE_TEXT : 
            return{
                ...state,
                text : action.text
            }
        default : 
            return state
    }
}

export default reducer