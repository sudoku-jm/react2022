
//1. 액션생성 - 모듈이름을 앞에 붙여줌으로써 액션명 중복방지
const RED = 'color/RED'
const GREEN = 'color/GREEN'
const BLUE = 'color/BLUE'
const BLACK = 'color/BLACK'

//2. 액션생성함수(type) 내보내기
export const red = () => ({type : RED})
export const green = () => ({type : GREEN})
export const blue = () => ({type : BLUE})
export const black = () => ({type : BLACK})


//3. 초기값 선언
const initalState = {color : 'pink'}


//4. 순수 함수 - reducer 함수 만들기
const reducer = ( state = initalState, action) => {
    switch(action.type){
        case RED : 
            return{color:'red'}
        case GREEN : 
            return{color: 'green'}
        case BLUE : 
            return{color:'blue'}
        case BLACK : 
            return{color:'black'}
        default : 
            return state
    }
}
export default reducer