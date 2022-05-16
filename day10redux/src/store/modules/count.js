//1.액션 생성
const INCREMENT = 'count/INCREMENT'
const DECREMENT = 'count/DECREMENT'
const RESET = 'count/RESET'

//2.액션타입 내보내기
export const increment = () => ({type : INCREMENT})
export const decrement = () =>({type : DECREMENT})
export const reset = () => ({type : RESET})

//3.초기화
const initalState = { num : 0 }

//4.리듀서 함수
const reducer = (state = initalState, action) => {
    switch(action.type){
        case INCREMENT : 
            return{num : state.num + 1}
        case DECREMENT : 
            return{num : state.num - 1}
        case RESET : 
            return{num : initalState.num}
        default : 
            return state
    }
}

export default reducer