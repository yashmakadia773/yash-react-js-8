import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  DELETE_USER_PENDING,
  POST_USER_PENDING,
  UPDATE_USER_PENDING,
} from "../redux-saga/user/action/action";
import { useState } from "react";

const Data = () => {
  let email = useRef();
  let password = useRef();

  //view
  let [view, setView] = useState();

  //selector
  let user = useSelector((state) => state.userReducer);

  let dispatch = useDispatch();

  //add user
  let addUser = () => {
    let data = {
      email: email.current.value,
      password: password.current.value,
    };

    console.log(data);

    dispatch({ type: POST_USER_PENDING, payload: data });
  };

  //delete user
  let handleDelete = (id) => {
    console.log(id);

    dispatch({ type: DELETE_USER_PENDING, payload: id });
  };

  //update

  let handleView = (id, index) => {
    let data = user.user[index];

    // console.log(data);
    setView(data);
  };

  let handle = (e) => {
    setView({ ...view, [e.target.name]: e.target.value });
  };

  let update = () => {
    console.log(view);
    dispatch({ type: UPDATE_USER_PENDING, payload: view });
  };

  return (
    <>
      <input type="text" ref={email} />
      <input type="text" ref={password} />
      <button onClick={addUser}>Save</button>
      <br />

      <input type="text" name="email" value={view?.email} onChange={handle} />
      <input
        type="text"
        name="password"
        value={view?.password}
        onChange={handle}
      />
      <button onClick={update}>Update</button>

      <div>y
        {user.user?.map((val, index) => (
          <>
            <p>{val.id}</p>
            <h1>{val.email}</h1>
            <h2>{val.password}</h2>
            <button onClick={() => handleDelete(val.id)}>delete</button>
            <button onClick={() => handleView(val.id, index)}>View</button>
          </>
        ))}
      </div>
    </>
  );
};

export default Data;
