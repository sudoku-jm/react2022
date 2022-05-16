import { createSlice } from '@reduxjs/toolkit';

export const colorSlice= createSlice({
    name:'colorA' ,
    initialState:{
            color : 'hotpink'
    },
    reducers: {
        red: state => {
            state.color = 'red'
        },
        green: state => {
            state.color = 'green'
        },   
        blue : state => {
            state.color = 'blue'
        }
    }
})

export const { red, green, blue } = colorSlice.actions;
export default colorSlice.reducer