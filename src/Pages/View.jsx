import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { DELETE_USER, VIEW_USER } from "../Action/Action";

const View = () => {
  const dispatch = useDispatch();
  const record = useSelector((state) => state.crud.users);

  useEffect(() => {
    dispatch(VIEW_USER());
  }, []);

  const deleteData = (id) => {
    dispatch(DELETE_USER(id));
    alert("Successfully Deleted")
  };

  return (
    <center>
      <h2>View User</h2>

      <table class="table" border={1}>
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Password</th>
            <th scope="col">City</th>
            <th scope="col">Degignation</th>
            <th scope="col">Salary</th>
            <th scope="col">Contact</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {record.map((val, i) => {
            i = i + 1;
            return (
              <tr key={i}>
                <td>{i}</td>
                <td>{val.name}</td>
                <td>{val.email}</td>
                <td>{val.password}</td>
                <td>{val.city}</td>
                <td>{val.deg}</td>
                <td>{val.salary}</td>
                <td>{val.contact}</td>
                <td>
                  <button className="border-0 btn-sm btn-danger" onClick={() => deleteData(val.id)}>Delete</button>||
                  <Link to={`/edit/${val.id}`}><button  className="border-0 btn-sm btn-primary">Edit</button></Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Link to={`/add`}>Add</Link>
    </center>
  );
};

export default View;
