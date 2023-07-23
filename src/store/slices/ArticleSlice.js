import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";


const ArticleSlice = createSlice({
    name:'article',
    initialState:{
        articles:[
            {
                id:nanoid(),
                label:"Welcome Enabler! Please read this before posting!",
                tags:[],
                tagsBg:[],
                description:"Before you make a new topic or post, please read community guidlines.",
                category:[],
                users:["Bob","Arthur","Alfie"],
                replies:66,
                views:"15.1k",
                activity:"11d",
                guide:true
            },
            {
                id:nanoid(),
                label:"Current news and discussion",
                tags:[],
                tagsBg:[],
                category:"Mental Health",
                users:["Abhimanyu","Ganesh","Pradeep"],
                replies:66,
                views:"15.1k",
                activity: "11d"
            },
            {
                id:nanoid(),
                label:"Non-Urgent Emotional Help",
                tags:["mentalhealth ","enabler "],
                tagsBg:["bg-blue-500","bg-red-600"],
                category:"Video",
                users:["Larry","Thomas"],
                replies:31,
                views:"41.5k",
                activity: "13m"
            },
            {
                id:nanoid(),
                label:"Other ways of getting help",
                tags:[],
                tagsBg:[],
                category:"Mind",
                users:["Elon","Isacc","Robert"],
                replies:207,
                views:"7.5k",
                activity: "41m"
            },
            {
                id:nanoid(),
                label:"How to help a person who self harms!",
                tags:[],
                tagsBg:[],
                category:"Q&A",
                users:["Fang"],
                replies:"2.3k",
                views:"2.0k",
                activity: "1h"
            },
            {
                id:nanoid(),
                label:"Feeling Overwhelmed",
                tags:["hope","help"],
                tagsBg:["bg-pink-500","bg-green-600"],
                category:"Hope",
                users:["Cillian","Uday","Irfaan"],
                replies:441,
                views:"31.1k",
                activity: "6h"
            },
            {
                id:nanoid(),
                label:"Should I Tell",
                tags:["neverstop","doubt"],
                tagsBg:["bg-green-800","bg-purple-600"],
                category:"Never Stop",
                users:["Krishna","Naman","Ram"],
                replies:"1.3k",
                views:"6.0k",
                activity: "7h"
            },
            {
                id:nanoid(),
                label:"If you need someone to talk to urgently and in confidence",
                tags:[],
                tagsBg:[],
                category:"Emotion Help",
                users:["Chris","Walker","Yama"],
                replies:"5.7k",
                views:"33.6k",
                activity: "13h",
                private:true
            },
            {
                id:nanoid(),
                label:"Post the weirdest thing you own here!",
                tags:[],
                tagsBg:[],
                category:"Education",
                users:["Dawn","Moose","Raj"],
                replies:"236",
                views:"2.3k",
                activity: "10h",
            },
            {
                id:nanoid(),
                label:"Show me your awesome photography",
                tags:["photography"],
                tagsBg:["bg-orange-600"],
                category:"Sceince",
                users:["Emma","Rakesh","Tej"],
                replies:"3",
                views:"519",
                activity: "2d",
            },
            {
                id:nanoid(),
                label:"Prevention Stratergies",
                tags:[],
                tagsBg:[],
                category:"Random",
                users:["Hesson","Ada","John"],
                replies:"60",
                views:"801",
                activity: "1h",
            },
            {
                id:nanoid(),
                label:"Live Music",
                tags:[],
                tagsBg:[],
                category:"Music",
                users:["Laker","Anna","Zoro"],
                replies:"587",
                views:"3.8k",
                activity: "3d",
            }
        ],
        randomColors:{A:"bg-[#60ad13]",
        B:"bg-[#7687db]",C:"bg-[#1daf5f]",D:"bg-[#d37730]",E:"bg-[#e5d160]",F:"bg-[#daed95]",G:"bg-[#f6fc58]",
        H:"bg-[#60ad13]",
        I:"bg-[#7687db]",J:"bg-[#1daf5f]",K:"bg-[#d37730]",L:"bg-[#e5d160]",M:"bg-[#daed95]",N:"bg-[#f6fc58]",
        O:"bg-[#60ad13]",
        P:"bg-[#7687db]",Q:"bg-[#1daf5f]",R:"bg-[#e38431]",S:"bg-[#e5d160]",T:"bg-[#daad95]",U:"bg-[#f6fc58]",
        V:"bg-[#60ad13]",
        W:"bg-[#7687db]",X:"bg-[#1daf5f]",Y:"bg-[#d37730]",Z:"bg-[#e5d160]"
    },
        dropdowns:{
            showUserPopUp:false,
            popUpUserName:"",
            showLanguages:false
        }
    },
    reducers:{
        setShowUserPopUp(state,action){
            state.dropdowns.showUserPopUp = !state.dropdowns.showUserPopUp
        },
        setShowLanguages(state,action){
            state.dropdowns.showLanguages = !state.dropdowns.showLanguages
        },
        setPopUpUserName(state,action){
            state.dropdowns.popUpUserName = action.payload;
        }
    }
})

export  const {
    setShowUserPopUp,
    setShowLanguages,
    setPopUpUserName
} = ArticleSlice.actions;

export const articleReducer = ArticleSlice.reducer;