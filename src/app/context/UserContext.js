"use client";
import {createContext, useContext, useState} from "react";
import {v4 as uuid} from 'uuid'

export const UsersContext = createContext();


export const useUsers = () => { 
    const context = useContext(UsersContext);
    if(!context) throw new Error('No hay context')
    return context
}



export const UserProvider = ({children}) => {

    const [users, setUsers] = useState(
        [
            {
                id: uuid(),
                name: "Sebastian Vargas Quintana",
                cel: "3043499541",
                email: "svquintana98@gmail.com",
            },
            {
                id: uuid(),
                name: "Diego Madrid Usuga",
                cel: "3206582870",
                email: "diego@gmail.com"
            },
            {
                id: uuid(),
                name: "Melissa Andrea Mazo",
                cel: "3230291322",
                email: "amazo@gmail.com",
            },
            {
                id: uuid(),
                name: "Searinox",
                cel: "3230291321",
                email: "searinoxmjs@gmail.com",
            },
            {
                id: uuid(),
                name: "User 999",
                cel: "3230291321",
                email: "searinoxmjs@gmail.com",
            },
        ]
    )
    
    const addUser = (name, email, cel) => {
        setUsers([...users, {
            id : uuid(),
            name : name,
            email : email,
            cel : cel
        }])
    }

    const deleteUser = (rows) => {
        let userList = [...users ]
        rows.forEach(e => {
            userList = [...userList.filter(user => user.id !== e.id)]
        });
        setUsers(userList)
    }

    const updateUser = (user) => {
        let userList = [...users ]
        userList = [...userList.filter(e => e.id !== user.id)]
        setUsers([...userList, user])
    }
    
    return <UsersContext.Provider value={{users, addUser, deleteUser, updateUser}}>{children}</UsersContext.Provider>
    
}