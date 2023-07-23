import { createSlice } from "@reduxjs/toolkit";


const NavBarSlice = createSlice({
    name:'navbar',
    initialState:{
        dropdowns:{
            showCategory:false,
            showTags:false,
        },
        data:{
            tags:[
                {color:"bg-blue-600",label:"gaming"},
                {color:"bg-blue-800",label:"nature"},
                {color:"bg-teal-600",label:"entertainment"},
                {color:"bg-rose-600",label:"selfie"},
                {color:"bg-green-600",label:"camera"},
                {color:"bg-yellow-800",label:"username"},
                {color:"bg-gray-400",label:"funny"},
                {color:"bg-orange-400",label:"photography"},
                {color:"bg-orange-800",label:"climbing"},
                {color:"bg-purple-800",label:"adventure"},
                {color:"bg-blue-800",label:"dreams"},
                {color:"bg-red-400",label:"life"},
                {color:"bg-teal-800",label:"reason"},
                {color:"bg-fuchsia-400",label:"social"},
            ],
            categories:[
                {color:"bg-yellow-300",label:"Hobbies"},
                {color:"bg-blue-500",label:"Video"},
                {color:"bg-orange-500",label:"Arts"},
                {color:"bg-rose-500",label:"Gaming"},
                {color:"bg-cyan-500",label:"Exchange"},
                {color:"bg-fuchsia-500",label:"Entertainment"},
                {color:"bg-blue-800",label:"Q&As"},
                {color:"bg-green-500",label:"Social"},
                {color:"bg-green-800",label:"Random"},
                {color:"bg-yellow-800",label:"Tech"},
                {color:"bg-gray-800",label:"Science"},
                {color:"bg-orange-900",label:"Pets"},
                {color:"bg-slate-800",label:"Education"},
                {color:"bg-red-300",label:"Politics"}]
        }
    },
    reducers:{
        setCategoryMenu(state,action){
            state.dropdowns.showCategory= !state.dropdowns.showCategory
        },
        setTagMenu(state,action){
            state.dropdowns.showTags= !state.dropdowns.showTags
        },
    }   
})

export const navbarReducer = NavBarSlice.reducer;
export const {
    setCategoryMenu,
    setTagMenu
} = NavBarSlice.actions;
