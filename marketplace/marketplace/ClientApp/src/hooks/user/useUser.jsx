import {useState} from 'react'

export function useUser(){
    const state ={
        name:"juan",
        lastName:"Perez"
    }
    const [valueUser, setValueUser]= useState(state)

    const setUser= (index, value )=>{
        try{
            setValueUser({...valueUser, [index]:value})
        }
        catch(e){
            console.error(e)
        }
    }
    return [valueUser, setUser]
}