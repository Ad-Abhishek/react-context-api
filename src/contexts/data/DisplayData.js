import React, {useContext} from "react";
import { DataContext } from "./DataContext";

const DisplayData = () => {
    const { data } = useContext(DataContext)

    if (data.length === 0) return <p>No Data Available</p>;

    return(
        <ul>
      {data.map((user) => (
        <li key={user.id}>
          <strong>{user.name}</strong> - {user.email}
        </li>
      ))}
    </ul>
        
    )
}

export default DisplayData;