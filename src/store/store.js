import { configureStore } from "@reduxjs/toolkit";
import { headerReducer } from "./slices/HeaderSlice";
import  {
    setHomeMenu,
    setSearchTopics,
    setTopics,
    setNotifications,
    setUserMenu
}  from "./slices/HeaderSlice";
import {
    navbarReducer,
    setCategoryMenu,
    setTagMenu
} from "./slices/NavBarSlice";

import {
    articleReducer,
    setShowLanguages,
    setShowUserPopUp,
    setPopUpUserName
} from './slices/ArticleSlice';

const store = configureStore({
    reducer:{
        header:headerReducer,
        navbar:navbarReducer,
        article:articleReducer
    }
});

export  {
    store,
    setHomeMenu,
    setSearchTopics,
    setTopics,
    setNotifications,
    setUserMenu,
    setCategoryMenu,
    setTagMenu,
    setShowLanguages,
    setShowUserPopUp,
    setPopUpUserName
} 
