import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { get } from "lodash";

import "./app.scss";

function App() {
  const count = useSelector(state => state.count);
  const users = useSelector(state => state.users);
  const dispatch = useDispatch();

  return (
    <div className="app">
      {users.loading ? (
        <p>loading ...</p>
      ) : (
        <>
          <h1> react app</h1>
          <button onClick={() => dispatch({ type: "GETUSERS" })}>click</button>
          <ul>
            {get(users, "data.data", []).map(({ employee_name }) => (
              <li>{employee_name}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default App;
