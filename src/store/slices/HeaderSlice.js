import { createSlice } from "@reduxjs/toolkit";

const HeaderSlice = createSlice({
    name:"header",
    initialState:{
        dropdowns: {
            showHomeMenu:false,
            showSearchTopics:false,
            showTopics:false,
            showNotifications:false,
            showUserMenu:false
        },
        data:{
            home:["Blog","About","Store","Mobile App","Developer api","Advertise","Need Help"],
            user:["Dashboard","Badges","My Groups","Notifications","Topics","Likes","Solved"],
            categories:[
                {color:"bg-yellow-300",label:"Hobbies"},
                {color:"bg-blue-500",label:"Video"},
                {color:"bg-orange-500",label:"Arts"},
                {color:"bg-rose-500",label:"Gaming"},
                {color:"bg-cyan-500",label:"Exchange"},
                {color:"bg-fuchsia-500",label:"Entertainment"},
                {color:"bg-blue-800",label:"Q&As"},
                {color:"bg-green-500",label:"Social"},
                {color:"bg-green-200",label:"Random"},
                {color:"bg-yellow-800",label:"Tech"},
                {color:"bg-grey-200",label:"Science"},
                {color:"bg-orange-900",label:"Pets"},
                {color:"bg-slate-800",label:"Education"},
                {color:"bg-red-300",label:"Politics"}]
        }
    },
    reducers:{
        setHomeMenu(state,action){
            state.dropdowns.showHomeMenu= !state.dropdowns.showHomeMenu
        },
        setSearchTopics(state,action){
            state.dropdowns.showSearchTopics= !state.dropdowns.showSearchTopics
        },
        setTopics(state,action){
            console.log("called");
            state.dropdowns.showTopics = !state.dropdowns.showTopics
            console.log(state.dropdowns.showTopics);
        },
        setNotifications(state,action){
            state.dropdowns.showNotifications=!state.dropdowns.showNotifications
        },
        setUserMenu(state,action){
            state.dropdowns.showUserMenu=!state.dropdowns.showUserMenu
        }
    }
});



export const headerReducer = HeaderSlice.reducer;
export const {
    setHomeMenu,
    setSearchTopics,
    setTopics,
    setNotifications,
    setUserMenu
} = HeaderSlice.actions;


