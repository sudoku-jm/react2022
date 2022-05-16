//1. 액션생성
const CHANGE_COLOR = 'changecolor/CHANGE_COLOR'

//2.액션 내보내기, 매개변수로 들고오기(action)
export const changeColor = ( color ) => ({
    type : CHANGE_COLOR, 
    color : color
})

//3.초기값 선언
const initalState = { color : 'yellow'}

//4.리듀서함수
const reducer = (state = initalState, action) => {
    switch(action.type){
        case CHANGE_COLOR : 
            return {
                color : action.color
            }
        default : 
            return state
    }
}

export default reducer