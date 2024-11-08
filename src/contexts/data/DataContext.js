import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [ data, setData ] = useState([])

    const fetchData = async () => {
        const url = 'https://jsonplaceholder.typicode.com/users';

        try{
            const users = await axios.get(url);
            if (!users) {
                throw new Error('Failed to fetch data');
            }
            setData(users.data);
            console.log(users);
        } catch(err) {
            console.error(err)
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    return(
        <DataContext.Provider value={{ data, fetchData }}>
            {children}
        </DataContext.Provider>
    )
}


