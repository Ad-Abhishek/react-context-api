import React, { useContext } from 'react';
import { DataContext } from './DataContext';

const ViewData = () => {
  const { users } = useContext(DataContext);

  if (users.length === 0) return <p>No Data Available</p>;

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <strong>{user.name}</strong> - {user.email}
        </li>
      ))}
    </ul>
  );
};

export default ViewData;
