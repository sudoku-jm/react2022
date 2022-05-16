import { configureStore } from "@reduxjs/toolkit";
import colorReducer from "./modules/color";
import changeColorReducer from './modules/changeColor'

const store = configureStore({
  reducer: {
    colorPage : colorReducer,
    changeColor : changeColorReducer
  },
});

export default store;