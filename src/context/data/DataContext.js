import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  const fetchData = async () => {
    const url = 'https://jsonplaceholder.typicode.com/users';

    try {
      const response = await axios.get(url);
      setUsers(response.data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <DataContext.Provider value={{ users, fetchData }}>
      {children}
    </DataContext.Provider>
  );
};
