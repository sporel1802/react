import { createContext,useContext } from "react";

export const TodoContext=createContext({
    todos:[
        {
            id:1,
            todo:"todo msg",
            completed: false,
        }
    ],
    addTodo:(todo)=>{},
    updatedTodo: (id,todo) =>{},
    deleteTodo: (id)=>{},
    togglecomplete:(id)=>{}
})

export const usetodo=()=>{
    return useContext(TodoContext)
}

export const Todoprovider=TodoContext.Provider